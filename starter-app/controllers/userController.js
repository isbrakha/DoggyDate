// const User = require('../models/user');

// exports.getDashboard = async (req, res) => {
//   try {
//     // Check if the user is authenticated
//     if (!req.session.user) {
//       return res.redirect('/login'); // Redirect to login if not authenticated
//     }

//     // Fetch additional user data from the database if needed
//     const user = await User.findById(req.session.user._id);

//     // Render the dashboard page with user data
//     res.render('login/dashboard', { title: 'Dashboard', user });
//   } catch (error) {
//     // Handle errors (e.g., database connection issues)
//     console.error(error);
//     res.render('error', { title: 'Error', error: 'An error occurred while fetching dashboard data' });
//   }
// };

const User = require('../models/user');

exports.getDashboard = async (req, res) => {
  try {
    // Check if the user is authenticated
    if (!req.session.user) {
      return res.redirect('/login'); // Redirect to login if not authenticated
    }

    // Fetch additional user data from the database if needed
    const user = await User.findById(req.session.user._id);

    // Render the dashboard page with user data
    res.render('login/dashboard', { title: 'Dashboard', user });
  } catch (error) {
    // Handle errors (e.g., database connection issues)
    console.error('Error in getDashboard:', error);
    res.render('error', { title: 'Error', error: 'An error occurred while fetching dashboard data' });
  }
};

