let db_config = require('../config/Databases').mssql()
let mssql = require('mssql')

class LoginModel {

    constructor(){

    }

    AutenticarUsuario(callback){
        mssql.connect(db_config).then(pool=>{
             return pool.request().query("")
        }).then(result=>{
            callback(null,result.recordset)
        }).catch(err =>{
            callback(err,null)
        })
    }
}

module.exports = new LoginModel()