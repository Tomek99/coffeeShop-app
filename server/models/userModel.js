const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      require: [true, "Please add a text value"],
    },
    lastName: {
      type: String,
      require: [true, "Please add a text value"],
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    number: {
      type: String,
      require: false,
    },
    loggedDevices: {
      type: Array,
      require: true,
    },
    orders: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
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
