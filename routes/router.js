const express = require('express');
const app = express();
const trips = require('../controllers/tripController');

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/trips', trips.findAllTrips);
app.get('/trip/:id', trips.findTrip);
app.post('/trip', trips.createTrip);
app.put('/trip/:id', trips.updateTrip);
app.delete('/trip/:id', trips.deleteTrip);

module.exports = app;