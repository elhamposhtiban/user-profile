
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UserSchema = new Schema(
  {
    UserName: {
      type: String,
      trim:true,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    creationDate: {
      type: Date,
      default: Date.now,
    },

    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

let User = mongoose.model("User", UserSchema);

module.exports = User;
