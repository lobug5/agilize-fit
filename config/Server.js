//bibliotecas
let express = require('express');
let body_parser = require('body-parser');
let cors = require('cors');

/** Configurações do servidor - Middlewares */
let app = express();

/** Processamento de Contente type
 * application/json e x-www-form-url-encoded
 */
app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());

/**
 * Configuração de CORS
 */
app.use(cors());

/**
 * Referencia e configuração de rotas
 */
//  const _router = require('../routes/TesteRouter')
const router_users = require('../routes/UserRouter');
const auth_router = require('../routes/AuthRouter');


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
app.use('/auth', auth_router);
//  app.use("/testes",teste_router)
app.use('/users', router_users);

// const teste_router = require('../routes/TesteRouter');
// const auth_router = require('../routes/AuthRouter');

// Temporada.hasOne(User);

/** Registro das rotas */
// app.use('/auth', auth_router);
// app.use('/testes', teste_router);

/* GETS */

app.get('/api/users', async (req, res) => {
  const { User } = require('../models');
  const users = await User.findAll().then();

  res.json(users);
});

app.get('/api/week', async (req, res) => {
  const { Week } = require('../models');
  const weeks = await Week.findAll().then();

  res.json(weeks);
});

app.get('/api/challenge', async (req, res) => {
  const { Challenge } = require('../models');

  const challenge = await Challenge.findAll().then();

  res.json(challenge);
});

/* POST */

app.post('/api/create-users', async (req, res) => {
  const { User } = require('../models');
  const users = await User.create().then();

  res.json(users);
});

app.post('/api/create-week', async (req, res) => {
  const { Week } = require('../models');
  const week = await Week.create().then();

  res.json(week);
});

app.post('/api/create-challenge', async (req, res) => {
  const { Challenge } = require('../models');
  const challenge = await Challenge.create().then();

  res.json(challenge);
});

/**
 * Ativar Passport e Middleware de Rotas JWT
 */
// const auth = require('../config/AuthJwt')();
// app.use(auth.initialize());

module.exports = app;
