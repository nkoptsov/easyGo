module.exports = (sequelize, DataTypes) => {
  const UsersTrips = sequelize.define('UsersTrips', {
    userId: DataTypes.INTEGER,
    tripId: DataTypes.INTEGER,
  }, {});
  UsersTrips.associate = (models) => {
    // associations can be defined here
    // UsersTrips.hasMany(models.Trip, { foreignKey: 'tripId' });
    // UsersTrips.hasMany(models.User, { foreignKey: 'userId' });
  };
  return UsersTrips;
};
