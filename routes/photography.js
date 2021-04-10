const express = require('express')
const router = express.Router()
const Image = require('../models/Image')

router.get('/', async (req, res) => {
    try {
        const images = await Image.find()
        // console.log(images)
        res.render('photography/list', {user: req.user, images: images})
    } catch (err) {
        console.log(err)
    }
    
})

module.exports = router