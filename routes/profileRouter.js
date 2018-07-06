const express = require('express');
// const model = require('../models');
const controler = require('../controllers/profileController');

const router = express.Router();

router.get('/users/:id/profile', controler.read);
router.post('/users/profile', controler.create);
router.put('/users/:id/profile', controler.update);
router.patch('/users/:id/profile', controler.update);
router.delete('/users/:id/profile', controler.remove);

module.exports = router;
