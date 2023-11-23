const User = require('../models/user');

exports.getLogin = (req, res) => {
  res.render('login', { title: 'Login' });
};

exports.postLogin = async (req, res) => {
  const { username, password } = req.body;

  // Validate input
  if (!username || !password) {
    return res.render('login', { title: 'Login', error: 'Please provide both username and password' });
  }

  try {
    // Find the user by username
    const user = await User.findOne({ username });

    // Check if the user exists and the password is correct
    if (user && user.comparePassword(password)) {
      // Set up the user session
      req.session.user = user;

      // Redirect to a protected route or dashboard
      return res.redirect('/dashboard');
    } else {
      // Authentication failed
      return res.render('login', { title: 'Login', error: 'Invalid username or password' });
    }
  } catch (error) {
    // Handle errors (e.g., database connection issues)
    console.error(error);
    return res.render('login', { title: 'Login', error: 'An error occurred during login' });
  }
};

exports.getSignup = (req, res) => {
  res.render('signup');
};

exports.postSignup = async (req, res) => {
  // handle signup logic
};

exports.logout = (req, res) => {
  // handle logout logic
};
