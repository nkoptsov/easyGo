const { User, Profile } = require('../models');


module.exports = {
  createUser(req, res) {
    console.log(req.body);
    User
      .create({
        login: req.body.login,
        email: req.body.email,
        password: User.generateHash(req.body.password),
      }).then((object) => {
        // this code work 
        console.log(typeof object.id);
        console.log(Profile.rawAttributes);
        Profile.create({ userId: 1 }).then();
        //
        res.status(201);
        res.redirect('/');
      })
      .catch(error => res.status(400).send(error.message));
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
