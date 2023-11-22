// const mongoose = require("mongoose");

// mongoose.connect(process.env.DATABASE_URL);

// const db = mongoose.connection;

// db.on("connected", function () {
//   console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
// });

// //DONT TOUCH THIS FOLDER!!!//
// // DONT TOUCH THIS FOLDER!!
// // DONT TOUCH THIS FOLDER!!


// const mongoose = require("mongoose");

// // Use useNewUrlParser and useUnifiedTopology options
// mongoose.connect(process.env.DATABASE_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;

// // Event listeners for successful and error connections
// db.on("connected", function () {
//   console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
// });

// db.on("error", function (error) {
//   console.error(`MongoDB connection error: ${error.message}`);
// });

// db.on("disconnected", function () {
//   console.log("MongoDB disconnected");
// });

// // Close MongoDB connection on application termination
// process.on("SIGINT", function () {
//   db.close(function () {
//     console.log("MongoDB connection closed due to application termination");
//     process.exit(0);
//   });
// });


const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});
