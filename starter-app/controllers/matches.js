const Owner = require("../models/owner");
const Dog = require("../models/dog");

module.exports = {
    index
}

async function index (req, res) {
    try {
    const userDog = await Dog.findById(req.params.userDogId)
    const matches = userDog.matchedWith.find({})
    res.render("swiping/matches"), {title: 'Congrats you matched with' + userDog.matchedWith[userDog.matchedWith.length - 1], matches: matches}
    } catch (err) {
        res.status(500).send('Server error')
    }
}