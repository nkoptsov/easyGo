const { createUserProfile } = require('../services/userService');

module.exports = {
  create(req, res, next) {
    const { body } = req;
    const result = createUserProfile(body);

    result
      .then(value => res.status(200).location(`${value.userId}`).end())
      .catch(error => next(error));
  },
};
