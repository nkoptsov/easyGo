
module.exports = (sequelize, DataTypes) => {
  const Trip = sequelize.define('Trip', {
    name: DataTypes.STRING,
    dateStart: DataTypes.DATEONLY,
    dateEnd: DataTypes.DATEONLY,
    locationStart: DataTypes.STRING,
    locationEnd: DataTypes.STRING,
    tripCost: DataTypes.DOUBLE,
    description: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
  }, {});
  Trip.associate = (models) => {
    // associations can be defined here
  };
  return Trip;
};
