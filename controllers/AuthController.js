/** Referencias */
let jwt_simple = require('jwt-simple')
let config = require('../config/JwtConfig')
/**Dados Fake */
let users = require('../config/users')
let db = require('../models/LoginModel');


exports.post = (req,res,next)=>{
    let payload = {id:users[0].id,nome:users[0].nome}
    let token = jwt_simple.encode(payload,config.jwtSecret)
    db.AutenticarUsuario(function(error,result){
        if(error != null){

        }else{
            
        }
    })
    res.json(token)
}