const express = require('express');

const userRouter = require('./userRouter');
const tripRouter = require('./tripRoutes');

const router = express.Router();

router.use('/users', userRouter);
router.use('/', tripRouter);

router.get('/', (req, res) => {
  res.render('index', { message: 'easyGo!' });
});

module.exports = router;
