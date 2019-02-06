const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const expressMessages = require('express-messages');
const config = require('./config/api');
const fileUpload = require('express-fileupload');

const { errorHandler } = require('./middlewares');
const { sequelize } = require('./models');
const routes = require('./routes');

module.exports = class Server {
  static async create(app) {
    app.use(fileUpload());
    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded());
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');
    app.use(session({
      secret: config.secret,
      resave: true,
      // saveUninitialized: false,
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
    return app;
  }

  async start() {
    // ?? then 

    await sequelize.sync()
      .then(() => console.log('Connected to database'))
      .catch(error => console.log(error));

    const app = await Server.create(express(), express);
    const server = app.listen(config.port, () => {
      console.log('Success, server started');
    });

    return { server, sequelize };
  }
}