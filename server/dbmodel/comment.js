const mongoose = require('mongoose');

const commentSchema =new  mongoose.Schema({
    name:String,
    email: String,
    postId: Number,
    commentId: Number,
    commentMessage: String,
})

module.exports = mongoose.model("comments", commentSchema);