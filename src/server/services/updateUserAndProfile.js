const { User, Profile, sequelize } = require('../models');

module.exports = {
  updateUserAndProfile(id, obj) {
    return new Promise((res, rej) => {
      sequelize.transaction(tr => (
        // change userId and id
        Promise.all([
          User.update(obj, { where: { id }, fields: ['login'] }, { transaction: tr }),
          Profile.update(obj, { where: { userId: id }, fields: ['email', 'firstName', 'lastName', 'phoneNumber', 'city', 'country', 'gender', 'birthday', 'photo', 'about'] }, { transaction: tr }),
        ])
      )
        .then(value => res(value))
        .catch(err => rej(err)));
    });
  },
};
