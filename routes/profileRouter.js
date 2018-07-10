const express = require('express');
const controller = require('../controllers/profileController');

const router = express.Router();

router.route('/:id/profile')
  .get(controller.getProfile)
  .put(controller.updateProfile)
  .delete(controller.removeProfile);


module.exports = router;
