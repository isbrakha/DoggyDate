// const createError = require('http-errors');
// const express = require('express');
// const path = require('path');
// const cookieParser = require('cookie-parser');
// const logger = require('morgan');



// const indexRouter = require('./routes/index');
// const ownersRouter = require('./routes/owners');


// const app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/owners', ownersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render("error", { title: "Error Page" });
// });


// module.exports = app;



const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');

require('dotenv').config();

const indexRouter = require('./routes/index');
const ownersRouter = require('./routes/owners');

const authRoutes = require('./routes/authRoutes'); // Import authRoutes
const userRoutes = require('./routes/userRoutes'); // Import userRoutes

const app = express();

// Connect to MongoDB (replace 'your-database-name' with your actual database name)
//mongoose.connect('mongodb://localhost/DoggyDate', { useNewUrlParser: true, useUnifiedTopology: true });
//mongoose.connect('mongodb://localhost:27017/DoggyDate', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));

// Use your existing middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Use your existing routes
app.use('/', indexRouter);
app.use('/owners', ownersRouter);

// Use the MEN stack routes
app.use('/', authRoutes);
app.use('/user', userRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error", { title: "Error Page" });
});

db.on('error', function (error){
  console.log('MongoDB connection error:', err);
});

db.once('open', function(){
  console.log('Connected to MongoDb ${db.name} at ${db.host}:${db.port}');
})

module.exports = app;
