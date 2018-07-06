const express = require('express');
const controller = require('../controllers/profileController');

const router = express.Router();

router.get('/:id/profile', controller.read);
router.put('/:id/profile', controller.update);
router.patch('/:id/profile', controller.patch);
router.delete('/:id/profile', controller.remove);

module.exports = router;
