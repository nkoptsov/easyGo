// const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const expressMessages = require('express-messages');

const fileUpload = require('express-fileupload');

const { errorHandler } = require('./middlewares');
const { sequelize } = require('./models');
const routes = require('./routes');

// const app = express();ƒ
module.exports = function (app, express) {
  app.use(fileUpload());
  app.use(cookieParser());

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded());

  sequelize.sync()
    .then(() => console.log('Connected to database'))
    .catch(error => console.log(error));

  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');

  app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: false,
  }));

  app.use(passport.initialize());
  app.use(passport.session());

  app.use(express.static(path.join(__dirname, 'public')));

  app.use(flash());
  app.use((req, res, next) => {
    res.locals.messages = expressMessages(req, res);
    next();
  });

  app.use('/', routes);

  app.use(errorHandler);

  app.listen(8080, () => {
    console.log('Success, server started');
  
    if(process.send) process.send('Success, server started');
    
    // this use for testing
  })
    .on('error', (err) => {
      if (err.errno === 'EADDRINUSE') {ß
        console.log('The port is busy');
      } else {
        console.log(err);
      }
    });
};
