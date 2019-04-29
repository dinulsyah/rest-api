const route = require('express').Router()
const todosRoutes = require('./todos')
const Controller = require('../controllers/controller')

route.use('/todos',todosRoutes)

route.post('/signup',Controller.createUser)

route.post('/signin',Controller.loginUser)

module.exports = route