// const mongoose = require("mongoose");

// const Schema = mongoose.Schema;


// const dogSchema = new Schema(
//   {
//     pictures: [String],
//     name: {type: String, required: true},
//     age: {type: Number},
//     weight: {type: Number},
//     breed: {type: String},
//     bio: {type: String},
//     hasAkcCertification: {type: Boolean},
//     owner: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'Owner'
//     }
//   }
// );

// module.exports = mongoose.model("Dog", dogSchema);

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dogSchema = new Schema({
  photo: {
    type: [String],
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Dog", dogSchema);