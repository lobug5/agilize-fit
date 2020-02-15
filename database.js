const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const db = {};

const sequelize = new Sequelize('nad1c283_teste1', 'nad1c283_tt', '12345', {
  host: '192.185.215.142:3306',
});

fs.readdirSync(__dirname)
  .filter(file => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
