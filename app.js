const express = require('express');
const bodyParser = require('body-parser');
const db = request('./models');
const routes = require('./routes');

const app = express();

app.use(bodyParser.json());
// router
app.use();
app.listen(3000, () => {
  console.log('server start in 3000');
});
