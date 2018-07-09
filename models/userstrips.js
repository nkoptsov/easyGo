module.exports = (sequelize, DataTypes) => {
  const UsersTrips = sequelize.define('UsersTrips', {
    userId: DataTypes.INTEGER,
    tripId: DataTypes.INTEGER,
  }, {});
  UsersTrips.associate = (models) => {
    // associations can be defined here
    UsersTrips.belongsTo(models.User, { as: 'Creator', foreignKey: 'userId' });
    UsersTrips.belongsTo(models.Trip, { foreignKey: 'tripId' });
  };
  return UsersTrips;
};
