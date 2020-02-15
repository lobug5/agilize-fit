module.exports = (sequelize, DataTypes) => {
  const Activity = sequelize.define(
    'Activity',
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
      foto: DataTypes.STRING,
    },
    { sequelize, modelName: 'activity' },
  );
  return Activity;
};
