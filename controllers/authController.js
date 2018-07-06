const passport = require('passport');
const passportLocal = require('../services/passport');

passportLocal(passport);

module.exports = {
  loginUser(req, res) {
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/users/login',
      failureFlash: 'Invalid username or password.',
      successFlash: 'Welcome!',
    })(req, res);
  },
  // logoutUser(req, res) {
  //   req.session.destroy((err) => {
  //     res.redirect('login');
  //   });
  // },
};
