module.exports = (sequelize, DataTypes) => {
  const Week = sequelize.define(
    'Week',
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
    { sequelize, modelName: 'week' },
  );
  Week.associate = function(models) {
    Week.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    Week.belongsToMany(models.User, { through: 'UserWeek', foreignKey: 'user_id', as: 'users' });
  };
  return User;
};
