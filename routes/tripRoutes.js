
const express = require('express');

const router = express.Router();
const { trips } = require('../controllers');

router.get('/', trips.findAllTrips);
router.post('/', trips.createTrip);
router.get('/:id', trips.findTrip);
router.put('/:id', trips.updateTrip);
router.delete('/:id', trips.deleteTrip);

module.exports = router;
