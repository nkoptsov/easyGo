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
    // userId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // }, // allowNull: false
  }, {
      hooks: {
        afterDestroy: (profile, options) => {
          // console.log(sequelize);
          sequelize.models.User
            .findById(profile.UserId)
            .then(value => value.destroy());
          // error
        },
      }
    });
  Profile.associate = function (models) {
    Profile.belongsTo(models.User, { foreignKey: 'UserId' });
    // associations can be defined here
  };
  return Profile;
};
