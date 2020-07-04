const mongoose = require('mongoose')
require('../connection.js')
const User = mongoose.model('User', {
    userName: {

        //required: true
    },
    password: {
       //required: true
    }
})

module.exports = User