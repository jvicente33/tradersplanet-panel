/**
 * Model Education
 */

const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

const Schema = mongoose.Schema

const Education = new Schema({
    title: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    content: {
        type: String,
        trim: true
    },
    tutor: {
        type: String,
        trim: true
    },
    published: Boolean,
    price: {
        type: String,
        trim: true
    }
})

Education.plugin(timestamp)

module.exports = mongoose.model('Education', Education)
