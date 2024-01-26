const express = require('express');
const postModel= require('../dbmodel/post');
const routes = express.Router();

routes.post("/", async (req, res) => {

  const data =  await postModel.find()
       res.send(data);
})

module.exports = routes;
