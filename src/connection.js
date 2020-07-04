const mongoose = require('mongoose')
const assert = require('assert')
const chalk = require('chalk')

const url = 'mongodb://127.0.0.1:27017'

mongoose.connect(url, {useUnifiedTopology: true,  useNewUrlParser: true} , err => {
    assert.equal(err,undefined)
    console.log(chalk.greenBright('database is connected'))
})