const { createUserProfile } = require('../services/userService');

module.exports = {
  create(req, res, next) {
    const { body } = req;
    const result = createUserProfile(body);

    result
      .then(value => res.status(200).send(value))
      .catch(error => next(error));
  },
};
