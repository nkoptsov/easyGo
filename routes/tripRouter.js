
const express = require('express');
const { tripController } = require('../controllers');

const router = express.Router();

router.route('/users/:id/trips/created/:tripId')
  .get(tripController.getOneTripOfUser)
  .put(tripController.updateTripOfUser)
  .delete(tripController.deleteTripOfUser);

router.route('/users/:id/trips/subscribed/:tripId')
  .get(tripController.getOneTripSubscribedByUser)
  .delete(tripController.unsubscribeToTrip);

router.route('/users/:id/trips/created')
  .get(tripController.getTripsCreatedByUser)
  .post(tripController.createTrip);

router.route('/users/:id/trips/subscribed')
  .get(tripController.getTripsSubscribedByUser)
  .post(tripController.subscribeToTrip);

router.get('/users/:id/trips/:tripId', tripController.getTripById);
router.get('/users/:id/trips/', tripController.getAllTrips);
router.get('/trips', tripController.getAllTrips);
router.get('/trips/:tripId', tripController.getTripById);

module.exports = router;
