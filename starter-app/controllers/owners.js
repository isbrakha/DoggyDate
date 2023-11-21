const owner = require("../models/owner");
const Owner = require("../models/owner");

module.exports = {
    index,
    new: newOwner,
    create
};

 function newOwner(req,res){
    res.render("owners/newOwner", {title: "Add details", errorMsg: ""});
}

async function create(req,res){
    
}