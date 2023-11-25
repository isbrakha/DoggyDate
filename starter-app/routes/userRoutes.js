// const express = require('express');
// const router = express.Router();
// const userController = require('../controllers/userController');

// router.get('/dashboard', userController.getDashboard);




// module.exports = router;









//            //NEW DASHBOARD CODE   CRASHED 1
// // routes/user.js
// const express = require('express');
// const router = express.Router();
// const User = require('../models/user');

// // // Route to get user profile
// // router.get('/profile', (req, res) => {
// //   // Implement logic to get user data from the session or database
// //   res.json({ user: req.session.user });
// // });
// router.get('/profile', async (req, res) => {
//     try {
//       // Assuming you are using session for user authentication
//       if (!req.session.user) {
//         return res.status(401).json({ message: 'Unauthorized' });
//       }
  
//       // Retrieve user data based on the user ID stored in the session
//       const userId = req.session.user._id;
//       const user = await User.findById(userId);
  
//       if (!user) {
//         return res.status(404).json({ message: 'User not found' });
//       }
  
//       // Return the user profile data
//       res.json({ user: { username: user.username, email: user.email } });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Internal Server Error' });
//     }
//   });
  












// // Route to update username
// router.post('/update-username', async (req, res) => {
//   try {
//     const user = await User.findById(req.session.user._id);
//     user.username = req.body.newUsername;
//     await user.save();
//     res.json({ success: true, message: 'Username updated successfully' });
//   } catch (error) {
//     res.json({ success: false, message: 'Error updating username' });
//   }
// });

// // Route to update password
// router.post('/update-password', async (req, res) => {
//   try {
//     const user = await User.findById(req.session.user._id);
//     const newPassword = req.body.newPassword;
//     user.password = newPassword; // Note: Hash the password before saving in a real-world scenario
//     await user.save();
//     res.json({ success: true, message: 'Password updated successfully' });
//   } catch (error) {
//     res.json({ success: false, message: 'Error updating password' });
//   }
// });

// module.exports = router;





// // routes/userRoutes.js
// const express = require('express');
// const router = express.Router();
// const userController = require('../controllers/userController');

// // Route to get user profile
// router.get('/profile', userController.getUserProfile);

// // Route to get user dashboard (example)
// router.get('/dashboard', userController.getUserDashboard);

// module.exports = router;




// // routes/userRoutes.js
// const express = require('express');
// const router = express.Router();
// const userController = require('../controllers/userController');

// // Route to get user profile (GET)
// router.get('/profile', userController.getUserProfile);

// // Route to render user dashboard (GET)
// router.get('/dashboard', (req, res) => {
//   // Implement logic to render the user dashboard
//   // You can use a template engine or send a JSON response depending on your frontend setup
//   res.render('dashboard'); // Replace 'dashboard' with the actual template or page name
// });

// // Route to update user profile (POST)
// router.post('/profile', /* Add logic for updating user profile */);

// // Route to update user password (POST)
// router.post('/password', /* Add logic for updating user password */);

// module.exports = router;


// const express = require('express');
// const router = express.Router();
// const userController = require('../controllers/userController');

// // Route to get user profile (GET)
// router.get('/profile', userController.getUserProfile);

// // Route to render user profile (GET)
// router.get('/profile', userController.renderUserProfile);

// // Route to update user profile (POST)
// router.post('/profile', userController.updateUserProfile);

// // Route to update user password (POST)
// router.post('/password', userController.updateUserPassword);

// module.exports = router;


// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to get user profile and render the profile (GET)
router.get('/profile', userController.renderUserProfile);

// Route to update user profile (POST)
router.post('/profile', userController.updateUserProfile);

// Route to update user password (POST)
router.post('/password', userController.updateUserPassword);

module.exports = router;


