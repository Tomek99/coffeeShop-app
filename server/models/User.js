const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      requried: true,
    },
    lastName: {
      type: String,
      requried: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    acceptTerms: {
      type: Boolean,
      required: true,
    },
    checkAll: {
      type: Boolean,
      required: false,
    },
    checked: {
      type: Array,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", UserSchema);
module.exports = User;
