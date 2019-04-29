/**
 * Model Post
 */

const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');

const Schema = mongoose.Schema

const Post = new Schema({
    title: String,
    content: String,
    author: String,
    tags: [String],
    background: String
})

Post.plugin(timestamp)

module.exports = mongoose.model('Post', Post)
