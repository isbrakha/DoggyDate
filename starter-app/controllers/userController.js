const User = require('../models/user');

exports.getDashboard = (req, res) => {
    //render the dashboard page
    res.render('dashboard');
}