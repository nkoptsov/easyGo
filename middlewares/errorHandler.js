
module.exports = (err, req, res, next) => {

  switch (err.flag) {
    case 'trip':
      res.status(404).send({ message: 'trip not found' });
      break;
    case 'tripBadRequest':
      res.status(400).send({ message: `bad request for trip, ${err.message}` });
      break;

    default:
      res.status(500).send({ message: 'Something broke!' });
  }
};
