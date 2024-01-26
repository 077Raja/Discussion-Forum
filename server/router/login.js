const express = require('express');
const usersModel= require('../dbmodel/users');
const routes = express.Router();
const jwt = require('jsonwebtoken');
routes.post("/", (req, res) => {

    const { email, password } = req.body;

    usersModel.findOne({ email: email })
        .then(user => {
            if (user) {
                const secretKey = "Rqwedsffghhghjjh"
                const userdata= {email, password}
                if (user.password === password) {
                    const token= jwt.sign(userdata, secretKey);
                    res.status(200).json(token)
                    console.log(token)
                }
                else {
                    res.json("the password is incorrect")
                }
            } else {
                res.json("No record existed")
            }
        })
})

module.exports = routes;
