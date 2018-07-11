const express = require('express');

const userRouter = require('./userRouter');
const profileRouter = require('./profileRouter');
const tripRouter = require('./tripRouter');

const router = express.Router();

router.use('/users', userRouter);
router.use('/users', profileRouter);
router.use('/', tripRouter);

router.get('/', (req, res) => {
  res.render('index', { message: 'easyGo!' });
});

module.exports = router;
