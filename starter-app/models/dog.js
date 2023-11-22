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
    hasAKCcertification: {type: Boolean},
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Owner'
    }
  }
);

module.exports = mongoose.model("Dog", dogSchema);
