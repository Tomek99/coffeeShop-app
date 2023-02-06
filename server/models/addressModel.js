const mongoose = require("mongoose");

const addressSchema = mongoose.Schema(
  {
    addresses: {
      type: Array,
      require: true,

      street: {
        type: String,
        require: true,
      },
      house: {
        type: String,
        require: true,
      },
      city: {
        type: String,
        require: true,
      },
      country: {
        type: String,
        require: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Address", addressSchema);
