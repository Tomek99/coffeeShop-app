const mongoose = require("mongoose");

const addressSchema = mongoose.Schema(
  {
    addresses: [
      {
        uniequId: {
          type: String,
          require: true,
          unique: true,
        },
        name: {
          type: String,
          require: true,
        },
        street: {
          type: String,
          require: false,
        },
        house: {
          type: String,
          require: false,
        },
        ZIP_code: {
          type: String,
          require: false,
        },
        city: {
          type: String,
          require: false,
        },
        number: {
          type: String,
          require: true,
        },
        email: {
          type: String,
          require: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Address", addressSchema);
