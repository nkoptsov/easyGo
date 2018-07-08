
const express = require('express');

const router = express.Router();
const { tripController } = require('../controllers');

router.get('/trips', tripController.getAllTrips);
router.get('/trips/:tripId', tripController.getTripById);
router.put('/trips/:tripId', tripController.updateTrip);
router.delete('/trips/:tripId', tripController.deleteTrip);

router.get('/users/:id/trips', tripController.getAllTrips);
router.get('/users/:id/trips/created', tripController.getTripsCreatedByUser);
router.post('/users/:id/trips', tripController.createTrip);

router.get('/users/:id/trips/created/:tripId', tripController.getOneTripOfUser);
router.put('/users/:id/trips/created/:tripId', tripController.updateTripOfUser);
router.delete('/users/:id/trips/created/:tripId', tripController.deleteTripOfUser);

router.get('/users/:id/trips/subscribed', tripController.getTripsSubscribedByUser);
router.get('/users/:id/trips/subscribed/:tripId', tripController.getOneTripSubscribedByUser);
router.post('/users/:id/trips/subscribed/:tripId', tripController.subscribeToTrip);
router.delete('/users/:id/trips/subscribed/:tripId', tripController.unsubscribeToTrip);


module.exports = router;
