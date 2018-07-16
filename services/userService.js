const { User, Profile, sequelize } = require('../models');

module.exports = {
  createUserProfile(reqBody) {
    return new Promise(() => {
      sequelize.transaction(tr => (
        User.create({
          login: reqBody.login,
          password: User.generateHash(reqBody.password),
        }, { transaction: tr })
          .then((createdUser) => {
            reqBody.userId = createdUser.id;
            return Profile.create(reqBody, { transaction: tr });
          })
      )).then(ceatedObject => {
        console.log(ceatedObject);
        console.log('yes');
      })
        .catch(err => {
          console.log(err);
          console.log('fuck you');
        });
    });
  },
};
