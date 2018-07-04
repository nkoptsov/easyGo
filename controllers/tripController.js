const { Trip } = require('../models');

module.exports = {
  // Create and Save a new Trip
  createTrip(req, res) {
    Trip.create(req.body).then((trip) => {
      res.status(201).location(`${req.url}${trip.id}`).end();
    }).catch((err) => { res.status(500).json({ message: `Error ${err}` }); });
  },

  // Retrieve and return all trips from the database.
  findAllTrips(req, res) {
    Trip.findAll().then((trips) => {
      res.status(200);
      res.json(trips);
    }).catch((err) => { res.status(500).json({ message: `Error ${err}` }); });
  },

  // Find a single trip with a tripId
  findTrip(req, res) {
    Trip.findById(req.params.id).then((trip) => {
      if (!trip) {
        return res.status(404).send({
          message: `Trip with id ${req.params.id} not found`,
        });
      }
      return res.status(200).json(trip);
    }).catch((err) => { res.status(500).json({ message: `Error ${err}` }); });
  },

  // Update a trip identified by the tripId in the request
  updateTrip(req, res) {
    Trip.findById(req.params.id).then((trip) => {
      if (!trip) {
        return res.status(404).send({
          message: `Trip with id ${req.params.id} not found`,
        });
      }
      return trip.update(req.body).then(() => {
        res.status(200).send({ message: 'Trip updated successfully.' });
      });
    }).catch((err) => { res.status(500).json({ message: `Error ${err}` }); });
  },

  // Delete a trip with the specified tripId in the request
  deleteTrip(req, res) {
    Trip.findById(req.params.id).then((trip) => {
      if (!trip) {
        return res.status(404).send({ message: `Trip with id ${req.params.id} not found` });
      }
      return trip.destroy().then(() => {
        res.status(200).send({ message: 'Trip deleted successfully.' });
      });
    }).catch((err) => { res.status(500).json({ message: `Error ${err}` }); });
  },
};
