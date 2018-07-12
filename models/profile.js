module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: ['^[a-z]+$', 'i'],
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: ['^[a-z]+$', 'i'],
      },
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
      },
    },
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
    photo: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: true,
      },
    },
    about: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    deletedAt: {
      type: DataTypes.DATE,
    },

  }, {
    timestamps: true,
    paranoid: true,
    hooks: {
      afterDestroy: (profile) => {
        sequelize.models.User
          .findById(profile.userId)
          .then(value => value.destroy());
      },
    },
  });
  Profile.associate = (models) => {
    Profile.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Profile;
};
