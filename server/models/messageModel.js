const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  contactType: {
    type: String,
    required: true,
  },
  clientMessage: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Message", messageSchema);
