const express = require('express');
const bodyParser = require('body-parser');

// const sequelize = require('./models');
const { sequelize } = require('./models');
const profile = require('./routes/profileRouter');

const app = express();

// database synhonization
sequelize.sync().then(() => {
  console.log('connecting has been successfully');
});

app.use(bodyParser.json());

// router
app.use('/', profile);
app.listen(3000, () => {
  console.log('server start in 3000');
});
