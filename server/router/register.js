const express = require('express');
const router = express.Router();
const usersModel = require('../dbmodel/users');

router.post('/', (req, res) => {
    usersModel.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

module.exports = router;