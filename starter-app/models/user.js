const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  photo: {
    type: [String],
    default: [],
  },
  dogName: {
    type: String,
    required: true,
  },
  dogAge: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);