const express = require('express');

const userRouter = require('./userRouter');
const profileRouter = require('./profileRouter');

const router = express.Router();

router.use('/', profileRouter);
router.use('/users', userRouter);


router.get('/', (req, res) => {
  res.render('index', { message: 'easyGo!' });
});

module.exports = router;
