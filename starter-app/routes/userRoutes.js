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


