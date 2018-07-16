// const { User, Profile } = require('../models');
const { createUserProfile } = require('../services/userService');

module.exports = {
  create(req, res) {
    const { body } = req;
    const result = createUserProfile(body);

    result
      .then((value) => {
        console.log(value);
        res.status(200).send();
      })
      .catch((error) => {
        console.log(error);
        res.status(404).send();
      });
  },
};
