// const getDashboard = (req, res) => {
//     // Fetch data for the dashboard
//     // ...
//     // Render the dashboard view with the data
// ;    res.render('dashboard', { data: data });
// }

// module.exports = { getDashboard }


// const User = require('../models/user'); // Replace with your model

// const getDashboard = (req, res) => {
//     // Fetch data for the dashboard
//     user.find({}, function(err, data) {
//         if (err) {
//             console.log(err);
//             res.status(500).send('An error occurred', err);
//         }
//         else {
//             // Render the dashboard view with the data
//             res.render('dashboard', { data: data });
//         }
//     });
// }

// module.exports = { getDashboard };

// const User = require('../models/user');

// const getDashboard = async (req, res) => {
//     try {
//         // Check if the user is authenticated
//         if (!req.session.user) {
//             return res.redirect('/login'); // Redirect to login if not authenticated
//         }

//         // Fetch additional user data from the database if needed
//         const user = await User.findById(req.session.user._id);

//         // Render the dashboard page with user data
//         res.render('login/dashboard', { title: 'Dashboard', user });
//     } catch (error) {
//         // Handle errors (e.g., database connection issues)
//         console.error(error);
//         res.render('error', { title: 'Error', error: 'An error occurred while fetching dashboard data' });
//     }
// };

// module.exports = { getDashboard };















// // dashboardController.js
// const User = require('../models/user');

// const getDashboard = (req, res) => {
//     // Fetch data for the dashboard
//     User.find({}, function(err, data) {
//         if (err) {
//             console.log(err);
//             res.status(500).send('An error occurred', err);
//         } else {
//             // Render the dashboard view with the data
//             res.render('login/dashboard', { title: 'Dashboard', data: data });
//         }
//     });
// }

// module.exports = { getDashboard };

