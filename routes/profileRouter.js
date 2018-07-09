const express = require('express');
const controller = require('../controllers/profileController');

const router = express.Router();

router.get('/:id/profile', controller.getProfile);
router.put('/:id/profile', controller.updateProfile);
router.delete('/:id/profile', controller.removeProfile);

module.exports = router;
