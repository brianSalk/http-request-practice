const express = require('express')
const User = require('../models/user.js')

const userRouter = express.Router()



userRouter.post('/users/signup', (req, res) => {
    //const {userName, password} = req.body
    console.log(req.body)
    //User.create({userName, password}).then(u => res.status(201).send(u)).catch(e => console.log(e) )
    res.status(201).send('worked')
    
})

userRouter.get('/users/signup', (req, res) => {
    console.log('from get',req.body)
    res.render('users/signup.hbs')
})


module.exports = userRouter