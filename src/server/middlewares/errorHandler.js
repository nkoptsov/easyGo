
module.exports = (err, req, res, next) => {
  switch (err.name) {
    case 'SequelizeValidationError':
      res.status(400).send({ message: `${err.message}` });
      break;
    case 'SequelizeUniqueConstraintError':
      res.status(400).send({ message: `${err.message}` });
      break;
    case 'tripNotFound':
      res.status(404).send({ message: 'trip not found' });
      break;
    case 'profileNotFound':
      res.status(404).send({ message: 'user not found' });
      break;
    case 'profileBadRequest':
      res.status(400).send({ message: 'bad request for user profile' });
      break;
    default:
      res.status(500).send({ message: 'Something broke!' });
  }
};
