const Owner = require("../models/owner");
const Dog = require("../models/dog");

module.exports = {
    new: newDog,
    create
};

async function newDog (req, res) {
    const owner = await Owner.findById(req.params.id)
    res.render('dogs/new', {owner, errorMsg: ""})
}

async function create(req, res) {
    const dogData = {...req.body}
    const owner = await Owner.findById(req.params.id)
    dogData.owner = owner
    dogData.hasAkcCertification = !!dogData.hasAkcCertification
    
    try {
        const createdDog = await Dog.create(dogData)
        res.redirect("dogs/new"), {errorMsg: "Dog created"}
    } catch(err) {
        console.log(err)
        res.render('dogs/new', {owner, errorMsg: err.message })
    }
  }