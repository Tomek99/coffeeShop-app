const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema(
  {
    invoices: [
      {
        uniequId: {
          type: String,
          require: true,
          unique: true,
        },
        NIP: {
          type: String,
          require: false,
        },
        name: {
          type: String,
          require: true,
        },
        street: {
          type: String,
          require: false,
        },
        ZIP_code: {
          type: String,
          require: false,
        },
        city: {
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

module.exports = mongoose.model("Invoice", invoiceSchema);
