
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    city: DataTypes.STRING,
    country: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATEONLY,
    photo: DataTypes.STRING,
    about: DataTypes.TEXT,
<<<<<<< HEAD
  });
  /* Profile.associate = (models) => {
    Profile.belongsTo(models.User, { foreignKey: 'userId' });
  }; */
=======
  }, {});
  Profile.associate = (models) => {
    Profile.belongsTo(models.User);
    // associations can be defined here
  };
>>>>>>> 81fb1be110440053a4dce8c5fca79a05b53c64af
  return Profile;
};
