const {Todo} = require('../models')
const {User} = require('../models')
const jwt = require('jsonwebtoken')
let bcrypt = require('bcryptjs')

class Controller{
    static findAll(req,res){
        Todo
            .findAll()
            .then((todos) => {
               res.status(200).json(todos)
            })
            .catch(err => {
                res.status(500).json({
                    msg: 'Error'
                })
            })
    }

    static findOne(req,res){
        const todosId = req.params.id
        Todo
            .findByPk(todosId)
            .then((todo) => {
                res.status(200).json(todo)
            })
            .catch(err => {
                res.status(500).json({
                    msg: 'Error'
                })
            })
    }

    static createTodo(req,res){
        const registerTodo = {
            title : req.body.title,
            description : req.body.description,
        }
        Todo
            .create(registerTodo)
            .then(registerTodo => {
                res.status(201).json(registerTodo)
            })
            .catch(err => {
                res.status(500).json({
                    msg: 'Error'
                }) 
            })
    }

    static deleteTodo(req,res){
        let todosId = req.params.id 
        Todo
            .findByPk(todosId)
            .then((todo) => {
                todo.destroy()
                res.status(200).json({
                    msg: 'Success Deleted Todo'
                })
            })
            .catch(err => {
                res.status(500).json({
                    msg: 'Error'
                })  
            }) 
    }

    static updateTodo(req,res){
        let todosId = req.params.id
        let updatedTodo = {
            'title':req.body.title,
            'description':req.body.description
        }
        Todo
            .findByPk(todosId)
            .then((todo) => {
                todo.update(updatedTodo)
                res.status(200).json(todo)
            })
            .catch((err) => {
                res.status(500).json({
                    msg:'Error'
                })
            })
    }

    static patchTodo(req,res){
        let todosId = req.params.id
        let setfield  = Object.keys(req.body)[0]
        let setvalue = Object.values(req.body)[0]
        let updatedTodo = {}
        updatedTodo[setfield] = setvalue
        Todo.findByPk(todosId)
            .then((todo) => {
                todo.update(updatedTodo)
                res.status(200).json(todo)
            })
            .catch(err => {
                res.status(500).json({
                    msg:'Error'
                })
            })
    }

    static createUser(req,res){
        const registerUser = {
            username : req.body.username,
            password : req.body.password,
        }
        User
            .create(registerUser)
            .then(registerUser => {
                res.status(201).json(registerUser)
            })
            .catch(err => {
                res.status(500).json({
                    msg: 'Error'
                }) 
            })
    }

    static loginUser(req,res){
        let input = {
            username:req.body.username,
            password:req.body.password
        }
        User
            .findOne({
                where: {
                    username:input.username
                }
            })
            .then((user) => {
                if(!user){
                    res.json({
                        msg:'Wrong Username/Password'
                    })
                }
                else{
                    let check = bcrypt.compareSync(input.password, user.password)
                    if(!check){
                        res.json({
                            msg:'Wrong Username/Password'
                        })
                    }
                    else{
                        const payload = {
                            id:user.id,
                            username:user.username
                        }
                        const token = jwt.sign(payload,'SECRET')
                        res.json({
                            token
                        })
                    }
                }
            })
            .catch(err => {
                res.status(500).json({
                    msg:'Error'
                })
            })
    }
}

module.exports = Controller