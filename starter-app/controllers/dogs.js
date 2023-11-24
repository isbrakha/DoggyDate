const Owner = require("../models/owner");
const Dog = require("../models/dog");

module.exports = {
    new: newDog,
};

async function newDog (req, res) {
    const owner = await Owner.findById(req.params.id)
    res.render('dogs/new', {owner})
}