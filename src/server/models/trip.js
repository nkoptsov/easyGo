module.exports = (sequelize, DataTypes) => {
  const Trip = sequelize.define('Trip', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        len: [3, 15],
      },
    },
    dateStart: {
      type: DataTypes.DATEONLY,
    },
    dateEnd: {
      type: DataTypes.DATEONLY,
      validate: {
        isAfterFrom(dateEnd) {
          if (this.dateStart > dateEnd) {
            throw new Error('Date of end trip must be more then Date of start trip!');
          }
        },
      },
    },
    locationStart: DataTypes.STRING,
    locationEnd: DataTypes.STRING,
    tripCost: DataTypes.DOUBLE,
    description: DataTypes.TEXT,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  Trip.associate = (models) => {
    Trip.belongsTo(models.User, { foreignKey: 'userId', targetKey: 'id' });
    Trip.belongsToMany(models.User, { through: 'UsersTrips', foreignKey: 'tripId' });
  };
  return Trip;
};
