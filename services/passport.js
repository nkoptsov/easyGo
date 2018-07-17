const { Strategy: LocalStrategy } = require('passport-local');
const { User } = require('../models');

module.exports = (passport) => {
  passport.use('local', new LocalStrategy(
    {
      usernameField: 'login',
      passwordField: 'password',
      passReqToCallback: true,
    },
    (req, login, password, done) => {
      console.log(login);
      User.findOne({
        where: {
          login,
        },
      }).then((user) => {
        console.log(user);
        if (!user) {
          return done(null, false);
        }
        if (!User.comparePassword(password, user.password)) {
          return done(null, false);
        }
        return done(null, user);
      }).catch((err) => {
        console.log(err.stack);
        done(null, false)});
    },
  ));
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
      if (user) {
        done(null, user.get());
      } else {
        done(user.errors, null);
      }
    });
  });
};
