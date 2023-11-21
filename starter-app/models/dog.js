const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const dogSchema = new Schema(
  {
    pictures: {type: [String]},
    name: {type: String, required: true},
    age: {type: Number},
    weight: {type: Number},
    breed: {type: String},
    bio: {type: String},
    akc: {type: Boolean}
  }
);

module.exports = mongoose.model("Dog", dogSchema);
