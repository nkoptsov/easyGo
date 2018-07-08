const express = require('express');
// const model = require('../models');
const controler = require('../controllers/profileController');

const router = express.Router();

router.get('/:id/profile', controler.getProfile);
// router.post('/profile', controler.create);
router.put('/:id/profile', controler.updateProfile);
router.delete('/:id/profile', controler.removeProfile);

module.exports = router;
