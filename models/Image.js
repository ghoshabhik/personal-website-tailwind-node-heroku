const mongoose = require('mongoose')

const ImageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    urlThumb: {
        type: String,
        required: true
    },
    urlFull: {
        type: String
    }
})


module.exports = mongoose.model('Image', ImageSchema)