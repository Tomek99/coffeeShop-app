const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
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
  isCompleted: {
    type: String,
    default: "waiting",
  },
});

module.exports = mongoose.model("Message", messageSchema);
