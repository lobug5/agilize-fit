module.exports = (sequelize, DataTypes) => {
  const Challenge = sequelize.define(
    'Challenge',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: DataTypes.INTEGER,
      points_temp: DataTypes.INTEGER,
      isActive: DataTypes.BOOLEAN,
    },
    { sequelize, modelName: 'user' },
  );
  Challenge.associate = function(models) {
    Challenge.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    Challenge.belongsToMany(models.User, { through: 'UserChallenge', foreignKey: 'user_id', as: 'users' });
  };
  return Challenge;
};
