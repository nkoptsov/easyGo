module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define(
    'Profile',
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      phoneNumber:
      {
        type: DataTypes.STRING,
        validate: { notEmpty: true },
      },
      city: DataTypes.STRING,
      country: DataTypes.STRING,
      gender: DataTypes.STRING,
      birthday: DataTypes.DATEONLY,
      photo: DataTypes.STRING,
      about: DataTypes.TEXT,
    },
    {},
  );
  Profile.associate = function (models) {
    // Profile.belongTo(models.Users)
    // associations can be defined here
  };
  return Profile;
};
