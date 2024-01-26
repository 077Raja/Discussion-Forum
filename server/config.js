const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/JustTalk'
const connect = ()=>{

mongoose.connect(url)
console.log('Connected to mongo db');
}

// const connection = async() => {
//     await mongoose.connect(url, () => {
//         console.log("Connected to mongo db");
//     })
// }

module.exports = connect;