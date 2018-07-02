
const bodyParser = require('body-parser');
const express = require('express');

const app = express();
const trips = require('../controllers/tripController');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/trips', trips.findAllTrips);
app.get('/trips/:id', trips.findTrip);
app.post('/trips', trips.createTrip);
app.put('/trips/:id', trips.updateTrip);
app.delete('/trips/:id', trips.deleteTrip);

module.exports = app;
