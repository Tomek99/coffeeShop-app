const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    orders: [
      {
        uniequId: {
          type: String,
          require: true,
          unique: true,
        },
        userOrderId: { type: String, require: true },
        paymentIntentId: { type: String },
        products: [
          {
            id: { type: String },
            name: { type: String },
            price: { type: String },
            quantity: { type: Number },
          },
        ],
        shipping: { type: Object, required: true },
        delivery_status: {
          type: String,
          default: "pending",
        },
        payment_status: {
          type: String,
          required: true,
        },
        subtotal: {
          type: String,
          required: true,
        },

        total: {
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

module.exports = mongoose.model("Order", orderSchema);
