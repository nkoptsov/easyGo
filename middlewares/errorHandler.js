const Boom = require('boom');

module.exports = (err, req, res, next) => {
  if (Boom.isBoom(err)) {
    return res.status(err.output.statusCode).send({ message: `${err.output.payload.message}` });
  }
  res.status(500).send({ message: `${err.message}` });
};
