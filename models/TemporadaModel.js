const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class Temporada extends Model {}
Temporada.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: DataTypes.INTEGER,
    points: DataTypes.INTEGER,
    data_ini: DataTypes.DATE,
    data_fim: DataTypes.DATE,
    isActive: DataTypes.BOOLEAN,
  },
  { sequelize, modelName: 'temporada' });
  Temporada.associate = function(models){
    Temporada.belongsTo(models.User, {foreignKey: 'user_id', as: 'user'})
    Temporada.belongsToMany(models.User, {through: 'UserSeason', foreignKey:'user_id', as: 'users'})
  }


