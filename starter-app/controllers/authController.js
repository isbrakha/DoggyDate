const User = require('../models/user');

exports.getLogin = (req, res) => {
    res.render('login');
};

exports.postLogin = (req, res) => {
    //handle login logic
};

exports.getSignup = (req, res) => {
    res.render('signup');
};

exports.postSignup = async (req,res) => {
    //handle signup logic
};

exports.logout = (req, res) => {
    //handle logout logic
}