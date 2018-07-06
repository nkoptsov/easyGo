const express = require('express');

const userRouter = require('./userRouter');
const profileRouter = require('./profileRouter');

const router = express.Router();

<<<<<<< HEAD
<<<<<<< HEAD
router.use('/', profileRouter);
=======
router.use('/users', profileRouter);
>>>>>>> 81fb1be110440053a4dce8c5fca79a05b53c64af
=======
router.use('/users', profileRouter);
>>>>>>> 81fb1be110440053a4dce8c5fca79a05b53c64af
router.use('/users', userRouter);


router.get('/', (req, res) => {
  res.render('index', { message: 'easyGo!' });
});

module.exports = router;
