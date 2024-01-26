const mongoose = require('mongoose');

const postSchema =new  mongoose.Schema({
    email: String,
    postId: Number,
    postTitle:String,
    postMessage: String,
})

module.exports = mongoose.model("posts", postSchema);