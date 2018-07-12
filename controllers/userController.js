const { User, Profile } = require('../models');

module.exports = {
  createUser(req, res) {
    User
      .create({
        login: req.body.login,
        password: User.generateHash(req.body.password),
      })
      .then((user) => {
        Profile.create({
          userId: user.id,
          email: req.body.email,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          phoneNumber: req.body.phoneNumber,
        })
          .then(res.status(200).json(user));
      })
      .catch(error => res.status(400).json({ message: `${error.message}` }));
  },
};
