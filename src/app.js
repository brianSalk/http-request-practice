const express = require('express')
const hbs = require('hbs')
const socketio = require('socket.io')
const bodyParser = require('body-parser')
require('./connection.js')
const chalk = require('chalk')
const assert = require('assert')
const userRoute = require('./routes/userRouter.js')
const port = process.env.PORT || 3000

const app = express()
app.use(express.static('public'))
app.set('view engine', 'hbs')
app.set('views','./handlebars/views')
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

app.use(bodyParser.urlencoded({extended: true}))

app.use(userRoute)


//app.user(gameRoute)

hbs.registerPartials('./handlebars/partials')
hbs.registerHelper('gameFilter', (game) => {
    return game.isReady
})


const tabs = [{text: 'home', link: '/'},
{text: 'games', link: '/games'}, 
{text: 'users', link: '/users'},
{text: 'support/feedback', link: '/support' }]

app.get('/', (req, res) => {
    res.render('index.hbs', {tabs, page: 'HOME'})
})
app.get('/games', (req, res) => {
    res.render('games.hbs', {tabs, page: 'GAMES'})
})
app.get('/users', (req, res) => {
    res.render('users/users.hbs', {tabs, page: 'USERS'})
})
app.get('/support', (req, res) => {
    res.render('support.hbs', {tabs, page: 'SUPPORT/FEEDBACK'})
})


app.listen(port, err => {
    assert.equal(err,undefined)
    console.log(chalk.greenBright(`listening on port ${port}`))
})