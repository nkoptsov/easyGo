
const trips = require('./tripRoutes');

module.exports = (app) => {
  app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to the Our API!',
  }));
  app.use('/trips', trips);
};
