// const User = require("../models/user");

// module.exports = {
//   // new: newUser,
//   // create,
//   // index,
//   // show,
// };

// function newUser(req, res) {
//   res.render("users/new", { title: "Match Page", errorMsg: "" });
// }
const User = require("../models/user");

exports.getAllDogs = async (req, res) => {
  try {
    const dogs = await User.find();
    res.render("dogs", { dogs });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};