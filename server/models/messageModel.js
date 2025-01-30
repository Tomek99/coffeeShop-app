const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    response: {
      type: String,
      default: "",
    },
    isCompleted: {
      type: String,
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Message", messageSchema);
