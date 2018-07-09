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

  }, {
    hooks: {
      afterDestroy: (profile) => {
        sequelize.models.User
          .findById(profile.UserId)
          .then(value => value.destroy());
      },
    },
  });
  Profile.associate = (models) => {
    Profile.belongsTo(models.User, { foreignKey: 'UserId' });
  };
  return Profile;
};
