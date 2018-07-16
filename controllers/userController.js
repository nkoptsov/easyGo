// const { User, Profile } = require('../models');
const { createUserProfile } = require('../services/userService');

module.exports = {
  create(req, res) {
    const { body } = req;
    const result = createUserProfile(body);
    result()
      .then((value) => {
        console.log(value);
        res.status(200).send();
      })
      .catch((err) => {
        console.log(err);
      });
    // User
    //   .create({
    //     login: req.body.login,
    //     password: User.generateHash(req.body.password),
    //   })
    //   .then((user) => {
    //     Profile.create({
    //       userId: user.id,
    //       email: req.body.email,
    //       firstName: req.body.firstName,
    //       lastName: req.body.lastName,
    //       phoneNumber: req.body.phoneNumber,
    //     })
    //       .then(res.status(200).json(user));
    //   })
    //   .catch(error => res.status(400).json({ message: `${error.message}` }));
  },
};
