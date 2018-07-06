const express = require('express');
const controler = require('../controllers/profileController');

const router = express.Router();

router.get('/:id/profile', controler.read);
router.put('/:id/profile', controler.update);
router.delete('/:id/profile', controler.remove);

module.exports = router;
