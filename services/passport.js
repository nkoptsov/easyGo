const LocalStrategy = require('passport-local').Strategy;
const { User } = require('../models');


module.exports = (passport) => {
  passport.use('local', new LocalStrategy(
    {
      usernameField: 'login',
      passwordField: 'password',
      passReqToCallback: true,
    },
    (req, login, password, done) => {
      User.findOne({
        where: {
          login,
        },
      }).then((user) => {
        if (!user) {
          return done(null, false, {
            message: 'User does not exist',
          });
        }
        if (!User.comparePassword(password, user.password)) {
          return done(null, false, {
            message: 'Incorrect password.',
          });
        }
        return done(null, user);
      }).catch(() => done(null, false, {
        message: 'Something went wrong with your Signin',
      }));
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
