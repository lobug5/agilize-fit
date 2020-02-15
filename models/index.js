const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const db = {};

const sequelize = new Sequelize('nad1c283_teste1', 'nad1c283_tt', '12345', {
  host: '192.185.215.142',
  dialect: 'mysql',
});

sequelize.sync({
  force: true,
});

fs.readdirSync(__dirname)
  .filter(file => file.indexOf('.') !== 0 && file !== path.basename(__filename) && file.slice(-3) === '.js')
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
  db[modelName].sync({ force: true });
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
