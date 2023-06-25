const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please add a text value"],
    },
    lastName: {
      type: String,
      required: [true, "Please add a text value"],
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: false,
    },
    loggedDevices: {
      type: Array,
      required: true,
    },
    addresses: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
    },
    invoices: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Invoice",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
