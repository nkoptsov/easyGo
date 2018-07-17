const { User, Profile, sequelize } = require('../models');

module.exports = {
  updateUserAndProfile(id, obj) {
    return new Promise((res, rej) => {
      sequelize.transaction(tr => (
        // changr userId and id
        Promise.all([
          User.update(obj, { where: { id }, fields: ['login'] }, { transaction: tr }),
          Profile.update(obj, { where: { userId: id }, fields: ['email', 'firstName', 'lastName', 'phoneNumber', 'city', 'country', 'gender', 'birthday', 'photo', 'about'] }, { transaction: tr }),
        ])
      )
        .then((value) => {
          console.log(value);
          res(value);
        })
        .catch((err) => {
          console.log(err);
          rej(err);
        }));
    });
  },
};
