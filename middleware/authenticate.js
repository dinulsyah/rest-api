const jwt = require('jsonwebtoken')

function authenticate(req,res,next){
    if(req.headers.hasOwnProperty('token')){
        const decoded = jwt.verify(req.headers.token,'SECRET') 
        req.decoded = decoded 
        next()
    }
    else{
        res.json({
            msg:'You must Login first'
        })
    }
}
module.exports = authenticate