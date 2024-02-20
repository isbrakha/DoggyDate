const Owner = require("../models/owner");
const Dog = require("../models/dog");

module.exports = {
    index
}

async function index (req, res) {
    try {
    const owner = await Owner.findById(req.params.ownerId)    
    const userDog = await Dog.findById(req.params.userDogId).populate( {
        path: 'matchedWith',
        populate: {
            path: 'owner',
            model: 'Owner'
        }
    })
    res.render("swiping/matches", {owner: owner, userDog: userDog})
    } catch (err) {
        console.log(err)
        res.status(500).send('Server error')
    }
}