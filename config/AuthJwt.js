let passport = require('passport')
let passport_jwt = require('passport-jwt')
let config = require('./JwtConfig');
let extract_jwt = passport_jwt.ExtractJwt
let strategy = passport_jwt.Strategy
let params = {
    secretOrKey:config.jwtSecret,
    jwtFromRequest:extract_jwt.fromAuthHeaderAsBearerToken()
}
let usuarios = require("./users");
module.exports = function(){

    let Strategy = new strategy(params,function(payload,done){

        var usuario = usuarios[0]
        if(usuario.id == 1){
            return done(null,{id:usuario.id})    
        }else{
            return done(new Error("Não authorizado"),null)
        }

    });

    passport.use(Strategy)

    return {
        initialize:function(){
            return passport.initialize()
        },
        authenticate:function(){
            return passport.authenticate("jwt",config.jwtSession)
        }
    }

}
