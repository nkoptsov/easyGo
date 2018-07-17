const { Trip, UsersTrips, User } = require('../models');

const error = new Error();

module.exports = {

  // Create and Save a new Trip
  createTrip(req, res, next) {
    Trip.create({
      name: req.body.name,
      dateStart: req.body.dateStart,
      dateEnd: req.body.dateEnd,
      locationStart: req.body.locationStart,
      locationEnd: req.body.locationEnd,
      tripCost: req.body.tripCost,
      description: req.body.description,
      userId: req.session.userId,
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
    Trip.findAll({
      where: {
        userId: req.session.userId,
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
    const { tripId: reqTripId } = req.params;
    Trip.findOne({
      where: {
        id: reqTripId,
        userId: req.session.userId,
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
    const { tripId: reqTripId } = req.params;
    Trip.update(req.body, {
      where: {
        id: reqTripId,
        userId: req.session.userId,
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
    const { tripId: reqTripId } = req.params;
    Trip.destroy({
      where: {
        id: reqTripId,
        userId: req.session.userId,
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
    const { tripId: reqTripId } = req.params;
    UsersTrips.create({
      userId: req.session.userId,
      tripId: reqTripId,
    }).then(() => {
      res.status(201).location(`${req.url}`).end();
    }).catch(err => next(err));
  },

  unsubscribeToTrip(req, res, next) {
    const { tripId: reqTripId } = req.params;
    UsersTrips.destroy({
      where: {
        userId: req.session.userId,
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
    UsersTrips.findAll({
      where: {
        userId: req.session.userId,
      },
      attributes: ['tripId'],
      include: [{
        model: Trip,
        attributes: ['name', 'dateStart', 'dateEnd', 'locationStart', 'locationEnd', 'tripCost'],
      }, {
        model: User,
        as: 'Creator',
        where: {
          id: req.session.userId,
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
    const { tripId: reqTripId } = req.params;
    UsersTrips.findAll({
      where: {
        userId: req.session.userId,
        tripId: reqTripId,
      },
      attributes: ['tripId'],
      include: [{
        model: Trip,
      }, {
        model: User,
        as: 'Creator',
        where: {
          id: req.session.userId,
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
