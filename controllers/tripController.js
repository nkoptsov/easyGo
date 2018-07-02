const { Trip } = require('../models');

module.exports = {
  // Create and Save a new Trip
  createTrip(req, res) {
    console.log(req.body);
    return Trip.create({
      name: req.body.name,
      dateStart: req.body.dateStart,
      dateEnd: req.body.dateEnd,
      description: req.body.description,
      idUser: req.body.idUser,
    }).then(() => {
      res.status(201);
      res.redirect('/');
    }).catch(error => res.status(400).send(error));
  },

  // Retrieve and return all trips from the database.
  findAllTrips(req, res) {
    return Trip.findAll().then((trips) => {
      res.status(200);
      res.json(trips);
    }).catch(error => res.status(400).send(error));
  },

  // Find a single trip with a tripId
  findTrip(req, res) {
    return Trip.findById(req.params.id).then((trip) => {
      if (!trip) {
        return res.status(404).send({
          message: `Trip with id ${req.params.id} not found`,
        });
      }
      return res.status(200).json(trip);
    }).catch(error => res.status(400).send(error));
  },

  // Update a trip identified by the tripId in the request
  updateTrip(req, res) {
    return Trip.findById(req.params.id).then((trip) => {
      if (!trip) {
        return res.status(404).send({
          message: `Trip with id ${req.params.id} not found`,
        });
      }
      return trip.update({
        name: req.body.name,
        dateStart: req.body.dateStart,
        dateEnd: req.body.dateEnd,
        description: req.body.description,
        idUser: req.body.idUser,
      }).then(() => {
        res.status(200).send({ message: 'Trip updated successfully.' });
      });
    });
  },

  // Delete a trip with the specified tripId in the request
  deleteTrip(req, res) {
    return Trip.findById(req.params.id).then((trip) => {
      if (!trip) {
        return res.status(404).send({
          message: `Trip with id ${req.params.id} not found`,
        });
      }
      return trip.destroy().then(() => {
        res.status(200);
        res.send({ message: 'Trip deleted successfully.' });
      });
    });
  },
};
