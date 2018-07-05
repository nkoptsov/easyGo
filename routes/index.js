const trips = require('./tripRoutes');

module.exports = (app) => {
  app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to the Our API!',
  }));
  app.use('/trips', trips);
};


// variont of maks
// const express = require('express');


// const userRouter = require('./userRouter');

// const router = express.Router();

// router.use('/users', userRouter);

// router.get('/', (req, res) => {
//   res.render('index', { message: 'easyGo!' });
// });

// module.exports = router;
