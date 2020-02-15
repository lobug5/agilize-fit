//bibliotecas 
let express = require('express');
let body_parser = require('body-parser');
let cors = require('cors');

/** Configurações do servidor - Middlewares */
let app = express();

/** Processamento de Contente type
 * application/json e x-www-form-url-encoded
 */
app.use(body_parser.urlencoded({extended:true}))
app.use(body_parser.json())

/**
 * Configuração de CORS 
 */
app.use(cors());

/**
 * Referencia e configuração de rotas 
 */
//  const _router = require('../routes/TesteRouter')
 const router_users = require('../routes/UserRouter')
 const auth_router = require('../routes/AuthRouter')

// function initDB() {
//   await sequelize.sync();
//   const jane = await User.create({
//     username: 'janedoe',
//     birthday: new Date(1980, 6, 20),
//   });
//   console.log(jane.toJSON());
// }

// initDB();

// Temporada.hasOne(User);

 /** Registro das rotas */
 app.use("/auth",auth_router)
//  app.use("/testes",teste_router)
 app.use("/users",router_users)


 /**
  * Ativar Passport e Middleware de Rotas JWT
 */
 const auth = require("../config/AuthJwt")();
 app.use(auth.initialize())

 module.exports = app;

