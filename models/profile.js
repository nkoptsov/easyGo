module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        is: ['^[a-z]+$', 'i'],
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        is: ['^[a-z]+$', 'i'],
      },
    },
    phoneNumber: DataTypes.STRING,
    city: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        is: ['^[a-z]+$', 'i'],
      },
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        is: ['^[a-z]+$', 'i'],
      },
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isIn: [['male', 'female']],
      },
    },
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
