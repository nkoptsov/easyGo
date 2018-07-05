const passport = require('passport');

const passportLocal = require('../services/passport');

passportLocal(passport);

module.exports = {
  loginUser(req, res, next) {
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/users/login',
    })(req, res, next);
  },
};
