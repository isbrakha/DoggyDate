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






// const User = require('../models/user');

// exports.getProfile = async (req, res) => { //MIGHT HAVE TO CHANGE BACK TO DASHBOARD 3
//   try {
//     // Check if the user is authenticated
//     if (!req.session.user) {
//       return res.redirect('/login'); // Redirect to login if not authenticated
//     }

//     // Fetch additional user data from the database if needed
//     const user = await User.findById(req.session.user._id);

//     // Render the dashboard page with user data
//     res.render('login/profile', { title: 'Profile', user }); //MIGHT HAVE TO CHANGE IT BACK TO DASHBOARD 4 BOTH
//   } catch (error) {
//     // Handle errors (e.g., database connection issues)
//     console.error('Error in getProfile:', error); // MIGHT HAVE TO CHAGNE PROFILE TO DASHBOARD 5
//     res.render('error', { title: 'Error', error: 'An error occurred while fetching profile data' });
//   }
// };






// // controllers/userController.js
// const User = require('../models/user');

// const getUserProfile = async (req, res) => {
//   try {
//     if (!req.session.user) {
//       return res.status(401).json({ message: 'Unauthorized' });
//     }

//     const userId = req.session.user._id;
//     const user = await User.findById(userId);

//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     res.json({ user: { username: user.username, email: user.email } });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };

// const getUserDashboard = (req, res) => {
//   // Implement logic to render the user dashboard
//   // You can use a template engine or send a JSON response depending on your frontend setup
//   res.render('dashboard'); // Replace 'dashboard' with the actual template or page name
// };

// module.exports = { getUserProfile, getUserDashboard };





const User = require('../models/user');

exports.getUserProfile = async (req, res) => {
  try {
    if (!req.session.user) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const userId = req.session.user._id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ user: { username: user.username, email: user.email } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// exports.renderUserProfile = (req, res) => {
//   // Implement logic to render the user profile
//   // You can use a template engine or send a JSON response depending on your frontend setup
//   res.render('login/profile'); // Replace 'profile' with the actual template or page name
// };

// exports.updateUserProfile = (req, res) => {
//   // Add logic for updating user profile
// };

// exports.updateUserPassword = (req, res) => {
//   // Add logic for updating user password
// };


exports.renderUserProfile = async (req, res) => {
  try {
    if (!req.session.user) {
      console.log(req.session.user)
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const userId = req.session.user._id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Assuming you are using a template engine like EJS
    res.render('login/profile', { user }); //: { username: user.username, email: user.email } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.updateUserProfile = async (req, res) => {
  try {
    const userId = req.session.user._id;
    const { newUsername, newEmail } = req.body;

    // Assuming you have a User model with a method like `updateProfile`
    const updatedUser = await User.updateProfile(userId, { username: newUsername, email: newEmail });

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'User profile updated successfully', user: updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.updateUserPassword = async (req, res) => {
  try {
    const userId = req.session.user._id;
    const { newPassword } = req.body;

    // Assuming you have a User model with a method like `updatePassword`
    const updatedUser = await User.updatePassword(userId, newPassword);

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'User password updated successfully', user: updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
