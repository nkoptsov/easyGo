const express = require('express');

const userRouter = express.Router();
const { userController, authController } = require('../controllers');

userRouter.get('/', (req, res) => {
  res.render('index', { message: 'easyGo!' });
});

userRouter.get('/register', (req, res) => {
  res.render('register');
});

userRouter.post('/register', userController.createUser);

userRouter.get('/login', (req, res) => {
  res.render('login');
});

userRouter.post('/login', (req, res) => {
  authController.loginUser(req, res);
});

// userRouter.get('/logout', authController.logoutUser);


module.exports = userRouter;
