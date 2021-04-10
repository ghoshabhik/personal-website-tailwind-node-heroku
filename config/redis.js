const redis = require('redis')

const connectRedis = async () => {

    const redis_password = process.env.REDIS_PASSWORD
    const redis_server = process.env.REDIS_SERVER
    const redis_port = process.env.REDIS_PORT

    const redisClient =  await redis.createClient({
        port      : parseInt(redis_port) , //6379          
        host      : redis_server,        
        password  : `${redis_password}`
    })

    redisClient.on('connect', function () {
        console.log(`Radis connected ${redisClient.connected}`)
    }).on('error', function (error) {
        console.log(error)
    });
}

module.exports = connectRedis

