
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UserSchema = new Schema(
  {
    UserName: {
      type: String,
      trim:true,
      required: true,
    },

    email: {
      type: String,
      match: [
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Please add a valid email address.',
      ],
      required: [true, 'Please enter Email Address']
    },

    description: {
      type: String,
      required: true,
    },

    // creationDate: {
    //   type: Date,
    //   default: Date.now,
    // },

    // user_id: {
    //   type: String,
    //   required: true,
    // },
  },
  { timestamps: true }
);

let User = mongoose.model("User", UserSchema);

module.exports = User;
