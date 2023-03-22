const mongoose = require("mongoose");

const addressSchema = mongoose.Schema(
  {
    addresses: [
      {
        uniequId: {
          type: String,
          required: true,
          unique: true,
        },
        name: {
          type: String,
          required: true,
        },
        street: {
          type: String,
          required: false,
        },
        house: {
          type: String,
          required: false,
        },
        ZIP_code: {
          type: String,
          required: false,
        },
        city: {
          type: String,
          required: false,
        },
        number: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Address", addressSchema);
