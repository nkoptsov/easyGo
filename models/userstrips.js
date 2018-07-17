module.exports = (sequelize, DataTypes) => {
  const UsersTrips = sequelize.define('UsersTrips', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    userId: DataTypes.INTEGER,
    tripId: DataTypes.INTEGER,
  }, {});
  UsersTrips.associate = (models) => {
    UsersTrips.belongsTo(models.User, { as: 'Creator', foreignKey: 'userId' });
    UsersTrips.belongsTo(models.Trip, { foreignKey: 'tripId' });
  };
  return UsersTrips;
};

