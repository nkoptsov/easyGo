const express = require('express');
const controller = require('../controllers/profileController');

const router = express.Router();

router.route('/profile/password')
  .post(controller.changePassword);

router.route('/profile/photo')
  .post(controller.savePhoto);

router.route('/profile')
  .get(controller.getProfile)
  .put(controller.updateProfile)
  .delete(controller.removeProfile);

module.exports = router;
