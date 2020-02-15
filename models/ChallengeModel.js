const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class Challenge extends Model {}
Challenge.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: DataTypes.INTEGER,
    points_temp: DataTypes.INTEGER,
    isActive: DataTypes.BOOLEAN
  },
  { sequelize, modelName: 'challenge' });
  Challenge.associate = function(models){
    Challenge.belongsTo(models.User, {foreignKey: 'user_id', as: 'user'})
    Challenge.belongsToMany(models.User, {through: 'UserChallenge', foreignKey:'user_id', as: 'users'})
  }