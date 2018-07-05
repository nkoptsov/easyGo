const { User, Profile } = require('../models');


module.exports = {
  createUser(req, res) {
    User
      .create({
        login: req.body.login,
        email: req.body.email,
        password: User.generateHash(req.body.password),
      }).then((user) => {
        Profile.create({ userId: user.id });
        res.status(201).location(`/${user.id}/profile`).json({ locatedAt: `/${user.id}/profile` });
      })
      .catch(error => res.status(404).send(error.message));
  },
  getUserById(req, res) {
    User
      .findById(req.params.id)
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }
        return user;
      })
      .catch(error => res.status(404).send(error.message));
  },
};
