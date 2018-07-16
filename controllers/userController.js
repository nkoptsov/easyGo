const { User } = require('../models');

module.exports = {
  createUser(req, res, next) {
    User
      .create({
        login: req.body.login,
        email: req.body.email,
        password: User.generateHash(req.body.password),
      })
      .then(user => res.status(200).json(user))
      .catch(error => next(error));
  },
};
