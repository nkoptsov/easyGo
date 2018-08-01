const { User, Profile, sequelize } = require('../models');

module.exports = {
  createUserProfile(reqBody) {
    return new Promise((res, rej) => {
      console.log(reqBody);
      sequelize.transaction(tr => (
        User.create({
          login: reqBody.login,
          password: User.generateHash(reqBody.password),
        }, { transaction: tr })
          .then((createdUser) => {
            reqBody.userId = createdUser.id;
            return Profile.create(reqBody, { transaction: tr });
          })
      )).then(ceatedObject => res(ceatedObject))
        .catch(err => rej(err));
    });
  },
};
