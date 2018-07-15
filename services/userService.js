const { User, Profile, sequelize } = require('../models');

module.exports = {
  createUserProfile(reqBody) {
    return sequelize.transaction(tr => (
      User.create({
        login: reqBody.login,
        password: User.generateHash(reqBody.password),
      }, { transaction: tr })
        .then((createdUser) => {
          reqBody.userId = createdUser.id;
          Profile.create(reqBody, { transaction: tr });
        })
    )).then(ceatedObject => {
      ceatedObject
    })
      .catch(err => {
        err
      });
  },
};
