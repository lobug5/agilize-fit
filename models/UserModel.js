module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
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
  return User;
};
