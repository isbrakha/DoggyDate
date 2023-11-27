const Owner = require("../models/owner");
//const Dog = require("../models/dog");

module.exports = {
    index,
    new: newOwner,
    create
};

function newOwner(req,res){
    res.render("owners/newOwner", {title: "Add details", errorMsg: ""});
}

async function create(req,res){
    const ownerData = {...req.body};
    ownerData.pet == !!ownerData.pet;

    for(let key in ownerData){
        if (ownerData[key] === "") delete ownerData[key];
    }

    try {
        const createdOwner = await Owner.create(ownerData);
        res.redirect("/owners/" + createdOwner._id);
    } catch (err){
        console.log(err);
        res.render("owners/new", {errorMsg: err.message});
    }
}

async function index(req, res){
    try{
        const results = await Owner.find({});
        res.render("owners/index",{title: "profile", owner: results});
    } catch(err){
        console.log(err.message);
        res.redirect("/");
    }
}