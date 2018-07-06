const express = require('express');
const controler = require('../controllers/profileController');

const router = express.Router();

<<<<<<< HEAD
<<<<<<< HEAD
router.get('/users/:id/profile', controler.read);
router.post('/users/profile', controler.create);// ??
router.put('/users/:id/profile', controler.update);
router.patch('/users/:id/profile', controler.patch);
router.delete('/users/:id/profile', controler.remove);
=======
router.get('/:id/profile', controler.read);
router.put('/:id/profile', controler.update);
router.delete('/:id/profile', controler.remove);
>>>>>>> 81fb1be110440053a4dce8c5fca79a05b53c64af
=======
router.get('/:id/profile', controler.read);
router.put('/:id/profile', controler.update);
router.delete('/:id/profile', controler.remove);
>>>>>>> 81fb1be110440053a4dce8c5fca79a05b53c64af

module.exports = router;
