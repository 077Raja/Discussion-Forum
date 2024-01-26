const express = require('express');
const router = express.Router();
const postModel = require('../dbmodel/post');

router.post('/', (req, res) => {
    postModel.create(req.body)
        .then(post => res.json(post))
        .catch(err => res.json(err))
})

module.exports = router;