const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes/');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
routes(app);

const port = parseInt(process.env.PORT, 10) || 3000;
app.listen(port);
