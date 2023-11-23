const User = require("../models/user");

module.exports = {
  new: newUser,
  // create,
  // index,
  // show,
};

function newUser(req, res) {
  res.render("users/new", { title: "Match Page", errorMsg: "" });
}
