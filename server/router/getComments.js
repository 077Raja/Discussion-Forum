const express = require('express');
const commentModel= require('../dbmodel/comment');
const routes = express.Router();

routes.post("/:id", async (req, res) => {
    const postId = req.params.id;
  const data =  await commentModel.find({postId})
       res.send(data);
})

module.exports = routes;
