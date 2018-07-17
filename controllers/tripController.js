const { Trip, UsersTrips, User } = require('../models');

const error = new Error();

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
    }).then(() => {
      res.status(201).location(`${req.url}`).end();
    }).catch(err => next(err));
  },

  // Retrieve and return all trips from the database.
  getAllTrips(req, res, next) {
    Trip.findAll().then((trips) => {
      res.status(200).json(trips);
    }).catch(err => next(err));
  },

  // Find a single trip with a tripId
  getTripById(req, res, next) {
    const { tripId: reqTripId } = req.params;
    Trip.findById(reqTripId).then((trip) => {
      if (!trip) {
        error.name = 'tripNotFound';
        return next(error);
      }
      return res.status(200).json(trip);
    }).catch(err => next(err));
  },


  getTripsCreatedByUser(req, res, next) {
    const { id: reqUserId } = req.params;
    Trip.findAll({
      where: {
        userId: reqUserId,
      },
    }).then((trips) => {
      if (!trips.length) {
        error.name = 'tripNotFound';
        return next(error);
      }
      return res.status(200).json(trips);
    }).catch(err => next(err));
  },

  getOneTripOfUser(req, res, next) {
    const { id: reqUserId, tripId: reqTripId } = req.params;
    Trip.findOne({
      where: {
        id: reqTripId,
        userId: reqUserId,
      },
    }).then((trip) => {
      if (!trip) {
        error.name = 'tripNotFound';
        return next(error);
      }
      return res.status(200).json(trip);
    }).catch(err => next(err));
  },

  updateTripOfUser(req, res, next) {
    const { id: reqUserId, tripId: reqTripId } = req.params;
    Trip.update(req.body, {
      where: {
        id: reqTripId,
        userId: reqUserId,
      },
    }).then((number) => {
      if (number[0] === 0) {
        error.name = 'tripNotFound';
        return next(error);
      }
      return res.status(200).send({ message: 'Trip updated successfully.' });
    }).catch(err => next(err));
  },

  deleteTripOfUser(req, res, next) {
    const { id: reqUserId, tripId: reqTripId } = req.params;
    Trip.destroy({
      where: {
        id: reqTripId,
        userId: reqUserId,
      },
    }).then((numberOfRows) => {
      if (!numberOfRows) {
        error.name = 'tripNotFound';
        return next(error);
      }
      return res.status(200).send({ message: 'Trip deleted successfully.' }).end();
    }).catch(err => next(err));
  },

  subscribeToTrip(req, res, next) {
    const { id: reqUserId, tripId: reqTripId } = req.params;
    UsersTrips.create({
      userId: reqUserId,
      tripId: reqTripId,
    }).then(() => {
      res.status(201).location(`${req.url}`).end();
    }).catch(err => next(err));
  },

  unsubscribeToTrip(req, res, next) {
    const { id: reqUserId, tripId: reqTripId } = req.params;
    UsersTrips.destroy({
      where: {
        userId: reqUserId,
        tripId: reqTripId,
      },
    }).then((numberOfRows) => {
      if (!numberOfRows) {
        error.name = 'tripNotFound';
        return next(error);
      }
      return res.status(200).send({ message: 'UserTrip deleted successfully.' }).end();
    }).catch(err => next(err));
  },

  getTripsSubscribedByUser(req, res, next) {
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
        error.name = 'tripNotFound';
        return next(error);
      }
      return res.status(200).json(trips);
    }).catch(err => next(err));
  },

  getOneTripSubscribedByUser(req, res, next) {
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
        error.name = 'tripNotFound';
        return next(error);
      }
      return res.status(200).json(trips);
    }).catch(err => next(err));
  },

};
