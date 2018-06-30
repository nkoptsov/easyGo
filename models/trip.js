'use strict';
module.exports = (sequelize, DataTypes) => {
  var Trip = sequelize.define('Trip', {
    name: DataTypes.STRING,
    dateStart: DataTypes.DATEONLY,
    dateEnd: DataTypes.DATEONLY,
    description: DataTypes.TEXT,
    idUser: DataTypes.INTEGER
  }, {});
  Trip.associate = function(models) {
    // associations can be defined here
  };
  return Trip;
};