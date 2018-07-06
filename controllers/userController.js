const { User, Profile } = require('../models');

module.exports = {
  createUser(req, res) {
    User
      .create({
        login: req.body.login,
        email: req.body.email,
        password: User.generateHash(req.body.password),
<<<<<<< HEAD
      }).then((object) => {
        Profile.create({ UserId: object.id }).then();
        res.status(201);
        res.redirect('/');
=======
      }).then((user) => {
        Profile.create({ userId: user.id }).catch(error => res.json({ message: `Somthing went wrong with id ${user.id}   ${error}` }));
        res.status(201).location(`/${user.id}/profile`).json({ locatedAt: `/${user.id}/profile` });
>>>>>>> add_profile_a
      })
      .catch(error => res.status(404).json({ message: `Somthing went wrong with id ${User.id}    ${error}` }));
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
