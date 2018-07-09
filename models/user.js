const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    login: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });
  User.associate = (models) => {
    // associations can be defined here
    User.hasMany(models.Trip, { foreignKey: 'userId', sourceKey: 'id' });
    User.belongsToMany(models.Trip, { through: 'UsersTrips', foreignKey: 'userId' });
  };
  User.generateHash = password => bcrypt.hashSync(password, bcrypt.genSaltSync(8));
  User.comparePassword = (candidatePassword, hash) => bcrypt.compareSync(candidatePassword, hash);
  return User;
};
