const express = require('express');
const { tripController } = require('../controllers');

const router = express.Router();

router.route('/users/trips/created/:tripId')
  .get(tripController.getOneTripOfUser)
  .put(tripController.updateTripOfUser)
  .delete(tripController.deleteTripOfUser);
router.route('/users/trips/subscribed')
  .get(tripController.getTripsSubscribedByUser)
  .post(tripController.subscribeToTrip);
router.route('/users/trips/subscribed/:tripId')
  .get(tripController.getOneTripSubscribedByUser)
  .delete(tripController.unsubscribeToTrip);

router.route('/users/trips/created')
  .get(tripController.getTripsCreatedByUser)
  .post(tripController.createTrip);

router.get('/users/trips/search', tripController.getAllTripsUniversal);
router.get('/users/trips/:tripId', tripController.getTripById);

router.get('/users/trips', tripController.getAllTrips);
router.get('/trips/search', tripController.getAllTripsUniversal);
router.get('/trips/:tripId', tripController.getTripById);
router.get('/trips', tripController.getAllTripsUniversal);

module.exports = router;
