const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class User extends Model {}
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    weightStart: DataTypes.FLOAT,
    weightEnd: DataTypes.FLOAT,
    isActive: DataTypes.BOOLEAN,
  },
  { sequelize, modelName: 'user' },
);
