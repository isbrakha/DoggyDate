const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  photo: {
    type: [String],
    default: [],
    required: true,
  },
  dogName: {
    type: String,
    required: true,
  },
  dogAge: {
    type: Number,
    required: true,
  },
  location: String,
});

module.exports = mongoose.model("User", userSchema);
