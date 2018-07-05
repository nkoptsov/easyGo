const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');

const app = express();

const routes = require('./routes/index');

require('./services/passport')(passport);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(flash());
app.use((req, res, next) => {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

app.use('/', routes);


app.listen(3000);

