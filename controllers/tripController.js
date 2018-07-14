const { Trip, UsersTrips, User } = require('../models');

module.exports = {
  // Create and Save a new Trip
  createTrip(req, res, next) {
    const { id: reqUserId } = req.params;
    Trip.create({
      name: req.body.name,
      dateStart: req.body.dateStart,
      dateEnd: req.body.dateEnd,
      locationStart: req.body.locationStart,
      locationEnd: req.body.locationEnd,
      tripCost: req.body.tripCost,
      description: req.body.description,
      userId: reqUserId,
    }).then(trip => res.status(201).location(`${req.url}/${trip.id}`).end()).catch((err) => {
      next(err);
    });
  },

  // Retrieve and return all trips from the database.
  getAllTrips(req, res) {
    Trip.findAll().then((trips) => {
      res.status(200).json(trips);
    }).catch((err) => { res.status(500).json({ message: `Error ${err}` }); });
  },

  getTripById(req, res, next) {
    const { tripId: reqTripId } = req.params;
    Trip.findById(reqTripId).then((trip) => {
      if (!trip) {
        const err = new Error();
        err.nameM = 'Trip';
        return next(err);
      }
      return res.status(200).json(trip);
    }).catch((err) => {
      next(err);
    });
  },

  getTripsCreatedByUser(req, res) {
    const { id: reqUserId } = req.params;
    Trip.findAll({
      where: {
        userId: reqUserId,
      },
    }).then((trips) => {
      if (!trips.length) {
        return res.status(404).send({ message: `Trips of User with user id ${reqUserId} not found` });
      }
      return res.status(200).json(trips);
    }).catch((err) => { res.status(500).json({ message: `Error ${err}` }); });
  },

  getOneTripOfUser(req, res) {
    const { id: reqUserId, tripId: reqTripId } = req.params;
    Trip.findOne({
      where: {
        id: reqTripId,
        userId: reqUserId,
      },
    }).then((trip) => {
      if (!trip) {
        return res.status(404).send({ message: '404 not found' });
      }
      return res.status(200).json(trip);
    }).catch((err) => { res.status(500).json({ message: `Error ${err}` }); });
  },

  updateTripOfUser(req, res) {
    const { id: reqUserId, tripId: reqTripId } = req.params;
    Trip.update(req.body, {
      where: {
        id: reqTripId,
        userId: reqUserId,
      },
    }).then((number) => {
      if (number[0] === 0) {
        return res.status(404).send({ message: `Trip with id ${reqTripId} not found` });
      }
      return res.status(200).send({ message: 'Trip updated successfully.' });
    }).catch((err) => { res.status(500).json({ message: `Error ${err}` }); });
  },

  deleteTripOfUser(req, res) {
    const { id: reqUserId, tripId: reqTripId } = req.params;
    Trip.destroy({
      where: {
        id: reqTripId,
        userId: reqUserId,
      },
    }).then((numberOfRows) => {
      if (!numberOfRows) {
        return res.status(404).send({ message: `Trip with id ${reqTripId} not found` });
      }
      return res.status(200).send({ message: 'Trip deleted successfully.' }).end();
    }).catch((err) => { res.status(500).json({ message: `Error ${err}` }); });
  },

  subscribeToTrip(req, res) {
    const { id: reqUserId } = req.params;
    const { tripId: reqTripId } = req.body;
    Trip.findOne({
      where: {
        id: reqTripId,
        userId: reqUserId,
      },
    }).then((trip) => {
      if (!trip) {
        return UsersTrips.findOne({
          where: {
            userId: reqUserId,
            tripId: reqTripId,
          },
        }).then((record) => {
          if (!record) {
            return UsersTrips.create({
              userId: reqUserId,
              tripId: reqTripId,
            }).then(() => {
              res.status(201).location(`${req.url}`).end();
            }).catch((err) => { res.status(500).json({ message: `Error ${err}` }); });
          }
          return res.send({ message: 'User alredy subscribed' }).end();
        }).catch((err) => { res.status(500).json({ message: `Error ${err}` }); });
      }
      return res.send({ message: 'User created this trip' }).end();
    }).catch((err) => { res.status(500).json({ message: `Error ${err}` }); });
  },

  unsubscribeToTrip(req, res) {
    const { id: reqUserId, tripId: reqTripId } = req.params;
    UsersTrips.destroy({
      where: {
        userId: reqUserId,
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
    const { id: reqUserId } = req.params;
    UsersTrips.findAll({
      where: {
        userId: reqUserId,
      },
      attributes: ['tripId'],
      include: [{
        model: Trip,
        attributes: ['name', 'dateStart', 'dateEnd', 'locationStart', 'locationEnd', 'tripCost'],
      }, {
        model: User,
        as: 'Creator',
        where: {
          id: reqUserId,
        },
        attributes: ['login', 'email'],
      }],
    }).then((trips) => {
      if (!trips.length) {
        return res.status(404).send({ message: `Trips of User with id ${reqUserId} not found` });
      }
      return res.status(200).json(trips);
    }).catch((err) => { res.status(500).json({ message: `Error ${err}` }); });
  },

  getOneTripSubscribedByUser(req, res) {
    const { id: reqUserId, tripId: reqTripId } = req.params;
    UsersTrips.findAll({
      where: {
        userId: reqUserId,
        tripId: reqTripId,
      },
      attributes: ['tripId'],
      include: [{
        model: Trip,
      }, {
        model: User,
        as: 'Creator',
        where: {
          id: reqUserId,
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
