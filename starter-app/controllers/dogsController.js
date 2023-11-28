const Dog = require("../models/dog");

exports.getAllDogs = async (req, res) => {
  try {
    const dogs = await Dog.find();
    res.render("dogs", { dogs });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};