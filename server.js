const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const connectDb = require('./config/mongodb')
const connectRedis = require('./config/redis')
const morgan = require('morgan')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')

// const articlesRouter = require('./routes/articles')
// const projectsRouter = require('./routes/projects')
// const commentsRouter = require('./routes/comments')
// const searchRouter = require('./routes/search')
const methodOverride = require('method-override')

const { ensureAuth, ensureGuest } = require('./middleware/auth')

//Load Environment Variables
require('dotenv').config()

//Passport Config
require('./config/passport')(passport)

//Connect to MongoDb
const conn = connectDb()

//Connect to Redis
connectRedis()

const app = express()
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended:false }))
app.use(methodOverride('_method'))
app.use('/public', express.static('public'));

var corsOptions = {
    optionSuccessStatus: 200
}

app.use(morgan('dev'))

//Sessions
app.use(session({
    secret: 'mysecret',
    resave: false,
    saveUninitialized: false,
    // store: MongoStore.create(conn.host)
  }))

//Passport Middleware
app.use(passport.initialize())
app.use(passport.session())

// app.use('/search', searchRouter)
// app.use('/articles', articlesRouter)
// app.use('/projects', projectsRouter)
// app.use('/contact', commentsRouter)

app.use('/auth', require('./routes/auth'))


app.get('/status', cors(corsOptions), (req, res, next) => {
    res.send('UP')
})
app.get('/', (req, res) => {
    console.log(req.user)
    res.render('home/index', {user: req.user})
})
app.get('/login', (req, res) => {
    res.render('login/login', {user: req.user})
})


app.listen(process.env.PORT || 5000)