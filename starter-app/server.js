const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const session = require('express-session');
const passport = require('passport');

require('dotenv').config();
require('./config/database');
require('./config/passport');


const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');




const indexRouter = require('./routes/index');
const ownersRouter = require('./routes/owners');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
// require('dotenv').config();
// require('./config/database');

// const indexRouter = require('./routes/index');
// const ownersRouter = require('./routes/owners');
const dogsRouter = require('./routes/dogs')

const app = express();

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/uploads', express.static('uploads'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
  secret: 'your-random-secret',
  resave: true,
  saveUninitialized: true
}));

app.use(logger('dev'));
app.use('/', indexRouter);
app.use('/owners', ownersRouter);
app.use('/', authRoutes);
app.use('/user', userRoutes);

app.use(function(req, res, next) {
  next(createError(404));
});
app.use('/', dogsRouter)

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

app.use(function(err, req, res, next) {
  if (req.app.get('env') === 'development') {
    console.error(err.stack);
  }

  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error', { title: 'Error Page' });
});

app._router.stack.forEach((middleware) => {
  if (middleware.route) {
    console.log(`Route: ${middleware.route.path}`);
  }
});

db.on('error', function (error) {
  console.log('MongoDB connection error:', error);
  res.status(500).send('Database connection error. Please try again later.')
});

db.once('open', function () {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});

module.exports = app;





