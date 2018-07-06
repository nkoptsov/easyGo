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
  }, {});
  Profile.associate = (models) => {
    // associations can be defined here
  };
  return Profile;
};
