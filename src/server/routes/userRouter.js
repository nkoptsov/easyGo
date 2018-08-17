const express = require('express');

const {
  registerValidation,
  loginValidation,
  validateInput,
  validateLoginInput,
} = require('../services/validation');

const userRouter = express.Router();
const { userController, authController } = require('../controllers');

userRouter.get('/', (req, res) => {
  res.render('index', { message: 'easyGo!' });
});

userRouter.route('/register')
  .get((req, res) => res.render('register'))
  .post((req, res, next) => {
    validateInput(req.body, registerValidation).then(({ errors, isValid }) => {
      if (isValid) {
        userController.create(req, res, next);
      } else {
        res.status(400).json(errors);
      }
    });
  });

userRouter.route('/login')
  .get((req, res) => res.render('login'))
  .post((req, res) => {
    validateLoginInput(req.body, loginValidation).then(({ errors, isValid }) => {
      if (isValid) {
        authController.loginUser(req, res);
      } else {
        res.status(400).json(errors);
      }
    });
  });

userRouter.get('/logout', authController.logoutUser);

module.exports = userRouter;
