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
    res.render('login/profile', { user, title: 'random' }); //: { username: user.username, email: user.email } });
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
