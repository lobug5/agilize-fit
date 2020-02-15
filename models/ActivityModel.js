const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class Activity extends Model {}
Activity.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    point: DataTypes.INTEGER,
    isActive: DataTypes.BOOLEAN,
    time_ini: DataTypes.STRING,
    time_fim: DataTypes.STRING,
    foto: DataTypes.STRING
  },
  { sequelize, modelName: 'activity' });

