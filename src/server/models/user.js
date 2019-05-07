/**
 * Model User
 */

const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

const Schema = mongoose.Schema

const User = new Schema({
    username: {
        type: String,
        unique: true
    },
    name: String,
    email: String,
    password: String,
    summary: String
})

User.plugin(timestamp)

module.exports = mongoose.model('User', User)
