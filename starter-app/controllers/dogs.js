const Owner = require("../models/owner");
const Dog = require("../models/dog");

module.exports = {
    index,
    create,
    //new: newDog,
}

async function index(req,res){
    res.send("Index dog");
}

async function create(req,res){
    const dogData={...req.body};

    if(!dogData.profile){
        dogData.profile = new Date("2020, 1,1")
    }

    await Dog.create(dogData);
    res.redirect("/dogs/new");
}

