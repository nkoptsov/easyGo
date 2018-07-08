const { Trip, UsersTrips, User } = require('../models');

module.exports = {
  // Create and Save a new Trip
  createTrip(req, res) {
    Trip.create(req.body).then((trip) => {
      res.status(201).location(`${req.url}${trip.id}`).end();
    }).catch((err) => { res.status(500).json({ message: `Error ${err}` }); });
  },

  // Retrieve and return all trips from the database.
  getAllTrips(req, res) {
    Trip.findAll().then((trips) => {
      res.status(200).json(trips);
    }).catch((err) => { res.status(500).json({ message: `Error ${err}` }); });
  },

  // Find a single trip with a tripId
  getTripById(req, res) {
    const { tripId } = req.params;
    Trip.findById(tripId).then((trip) => {
      if (!trip) {
        return res.status(404).send({ message: `Trip with id ${tripId} not found` });
      }
      return res.status(200).json(trip);
    }).catch((err) => { res.status(500).json({ message: `Error ${err}` }); });
  },

  // Update a trip identified by the tripId in the request
  updateTrip(req, res) {
    const { tripId } = req.params;
    Trip.update(req.body, {
      where: {
        id: tripId,
      },
    }).then((number) => {
      if (number[0] === 0) {
        return res.status(404).send({ message: `Trip with id ${tripId} not found` });
      }
      return res.status(200).send({ message: 'Trip updated successfully.' });
    }).catch((err) => { res.status(500).json({ message: `Error ${err}` }); });
  },

  // Delete a trip with the specified tripId in the request
  deleteTrip(req, res) {
    const { tripId } = req.params;
    Trip.destroy({
      where: {
        id: tripId,
      },
    }).then((numberOfRows) => {
      if (!numberOfRows) {
        return res.status(404).send({ message: `Trip with id ${tripId} not found` });
      }
      return res.status(200).send({ message: 'Trip deleted successfully.' }).end();
    }).catch((err) => { res.status(500).json({ message: `Error ${err}` }); });
  },

  getTripsCreatedByUser(req, res) {
    const { id } = req.params;
    Trip.findAll({
      where: {
        userId: id,
      },
    }).then((trips) => {
      if (!trips.length) {
        return res.status(404).send({ message: `Trips of User with user id ${id} not found` });
      }
      return res.status(200).json(trips);
    }).catch((err) => { res.status(500).json({ message: `Error ${err}` }); });
  },

  getOneTripOfUser(req, res) {
    const { id, tripId } = req.params;
    Trip.findOne({
      where: {
        id: tripId,
        userId: id,
      },
    }).then((trip) => {
      if (!trip) {
        return res.status(404).send({ message: '404 not found' });
      }
      return res.status(200).json(trip);
    }).catch((err) => { res.status(500).json({ message: `Error ${err}` }); });
  },

  updateTripOfUser(req, res) {
    const { id, tripId } = req.params;
    Trip.update(req.body, {
      where: {
        id: tripId,
        userId: id,
      },
    }).then((number) => {
      if (number[0] === 0) {
        return res.status(404).send({ message: `Trip with id ${tripId} not found` });
      }
      return res.status(200).send({ message: 'Trip updated successfully.' });
    }).catch((err) => { res.status(500).json({ message: `Error ${err}` }); });
  },

  deleteTripOfUser(req, res) {
    const { id, tripId } = req.params;
    Trip.destroy({
      where: {
        id: tripId,
        userId: id,
      },
    }).then((numberOfRows) => {
      if (!numberOfRows) {
        return res.status(404).send({ message: `Trip with id ${tripId} not found` });
      }
      return res.status(200).send({ message: 'Trip deleted successfully.' }).end();
    }).catch((err) => { res.status(500).json({ message: `Error ${err}` }); });
  },

  subscribeToTrip(req, res) {
    const { id, tripId: reqTripId } = req.params;
    UsersTrips.create({
      userId: id,
      tripId: reqTripId,
    }).then(() => {
      res.status(201).location(`${req.url}`).end();
    }).catch((err) => { res.status(500).json({ message: `Error ${err}` }); });
  },

  unsubscribeToTrip(req, res) {
    const { id, tripId: reqTripId } = req.params;
    UsersTrips.destroy({
      where: {
        userId: id,
        tripId: reqTripId,
      },
    }).then((numberOfRows) => {
      if (!numberOfRows) {
        return res.status(404).send({ message: '404 not found' });
      }
      return res.status(200).send({ message: 'UserTrip deleted successfully.' }).end();
    }).catch((err) => { res.status(500).json({ message: `Error ${err}` }); });
  },

  getTripsSubscribedByUser(req, res) {
    const { id } = req.params;
    UsersTrips.findAll({
      where: {
        userId: id,
      },
      attributes: ['tripId'],
      include: [{
        model: Trip,
        attributes: ['name', 'dateStart', 'dateEnd', 'locationStart', 'locationEnd', 'tripCost'],
      }, {
        model: User,
        as: 'Creator',
        where: {
          id: req.params.id,
        },
        attributes: ['login', 'email'],
      }],
    }).then((trips) => {
      if (!trips.length) {
        return res.status(404).send({ message: `Trips of User with id ${req.params.id} not found` });
      }
      return res.status(200).json(trips);
    }).catch((err) => { res.status(500).json({ message: `Error ${err}` }); });
  },

  getOneTripSubscribedByUser(req, res) {
    const { id, tripId: reqTripId } = req.params;
    UsersTrips.findAll({
      where: {
        userId: id,
        tripId: reqTripId,
      },
      attributes: ['tripId'],
      include: [{
        model: Trip,
      }, {
        model: User,
        as: 'Creator',
        where: {
          id: req.params.id,
        },
        attributes: ['login', 'email'],
      }],
    }).then((trips) => {
      if (!trips.length) {
        return res.status(404).send({ message: `Trips with  id ${reqTripId} not found` });
      }
      return res.status(200).json(trips);
    }).catch((err) => { res.status(500).json({ message: `Error ${err}` }); });
  },

};
