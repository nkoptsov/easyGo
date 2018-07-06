const { User } = require('../models');

module.exports = {
  createUser(req, res) {
    User
      .create({
        login: req.body.login,
        email: req.body.email,
        password: User.generateHash(req.body.password),
      }).then(() => {
        res.status(201);
        res.redirect('/');
      })
      .catch(() => {
        res.status(400);
        res.redirect('/users/register');
      });
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
      .catch(error => res.status(400).send(error.message));
  },
};
