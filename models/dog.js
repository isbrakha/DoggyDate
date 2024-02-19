const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dogSchema = new Schema(
  {
    pictures: {type: String, required: true},
    name: {type: String, required: true},
    age: {type: Number, required: true},
    city: {type: String, required: true},
    weight: {type: Number, required: true}, 
    breed: {type: String, required: true},
    bio: {type: String, required: true},
    hasAkcCertification: {type: Boolean, required: true},
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Owner'
    },
    likes: [{ type: Schema.Types.ObjectId, ref: 'Dog' }],
    dislikes: [{ type: Schema.Types.ObjectId, ref: 'Dog' }],
    matchedWith: [{ type: Schema.Types.ObjectId, ref: 'Dog' }]
  }
);

module.exports = mongoose.model("Dog", dogSchema);