const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class Challenge extends Model {}
User.init(
  {
    id: DataTypes.STRING,
    name: DataTypes.STRING,
    weightStart: DataTypes.INTEGER,
    weightEnd: DataTypes.INTER,
  },
  { sequelize, modelName: 'user' },
);
