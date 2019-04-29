const {Todo} = require('../models')
const {User} = require('../models')

function authorization(req,res,next){
    Todo
        .findByPk(req.params.id)
        .then((todo) => {
            if(!todo){
                res.json({
                    msg:'not found'
                })
            }
            else{
                if(req.decoded.id !== todo.UserId){
                    res.json({
                        msg:'not authorized'
                    })
                }
                else{
                    next()
                }
            }
        })
        .catch((err) => {
            res.json({
                msg: 'Error'
            })
        })
}
module.exports = authorization