const router = require('express').Router()
const Controller = require('../controllers/controller')
const authenticate = require('../middleware/authenticate')
const authorize = require('../middleware/authorization')

router.get('/',authenticate,Controller.findAll)

router.post('/',authenticate,Controller.createTodo)

router.get('/:id',authenticate,authorize,Controller.findOne)

router.delete('/:id',authenticate,authorize,Controller.deleteTodo)

router.put('/:id',authenticate,authorize,Controller.updateTodo)

router.patch('/:id',authenticate,authorize,Controller.patchTodo)

module.exports = router