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
    weightStart: DataTypes.INTEGER,
    weightEnd: DataTypes.INTER,
    isActive: DataTypes.BOOLEAN,
  },
  { sequelize, modelName: 'user' },
);
