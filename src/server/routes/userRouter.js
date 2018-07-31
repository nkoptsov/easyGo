const express = require('express');
const { reqValidation } = require('../services/reqValidation')
const userRouter = express.Router();
const { userController, authController } = require('../controllers');

userRouter.get('/', (req, res) => {
  res.render('index', { message: 'easyGo!' });
});

userRouter.route('/register')
  .get((req, res) => res.render('register'))
  .post(userController.create);

userRouter.route('/login')
  .get((req, res) => res.render('login'))
  .post((req, res) => {
    const { errors, isValide } = reqValidation(req.body);
    if(!isValide) return res.status(400).json(errors);
    authController.loginUser(req, res);
  });

userRouter.get('/logout', authController.logoutUser);


module.exports = userRouter;
