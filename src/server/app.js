const express = require('express');

const app = express();

require('./main.js')(app, express);
require('./sequelize.js')();
