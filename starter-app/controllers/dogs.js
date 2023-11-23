const Owner = require("../models/owner");
const Dog = require("../models/dogs");

module.exports = {
    new: newDog,
    create
};

function newDog (req, res) {
    res.render('dogs/new')
}