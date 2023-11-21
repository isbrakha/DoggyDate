const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const ownerSchema = new Schema(
  {
    profilePic: {type: String},
    fullName: {type: String, required: true},
    userName: {type: String, required: true, unique: true},
    bio: {type: String}
  }
);

module.exports = mongoose.model("Owner", ownerSchema);
