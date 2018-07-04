const express = require('express');
const passport = require('passport');

const userRouter = express.Router();
const { userController } = require('../controllers');

userRouter.get('/register', (req, res) => {
  res.render('register');
});

userRouter.get('/login', (req, res) => {
  res.render('login');
});

userRouter.post('/register', userController.createUser);

userRouter.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/users/login',
  })(req, res, next);
});


module.exports = userRouter;
