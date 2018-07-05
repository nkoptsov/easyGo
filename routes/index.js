const express = require('express');

const userRouter = require('./userRouter');
const trips = require('./tripRoutes');

const router = express.Router();

router.use('/users', userRouter);
router.use('/trips', trips);

router.get('/', (req, res) => {
  res.render('index', { message: 'easyGo!' });
});

module.exports = router;
