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
        OrderId: { type: String, require: true },
        products: [
          {
            id: { type: String },
            name: { type: String },
            price: { type: String },
            quantity: { type: Number },
          },
        ],
        comment: {
          type: String,
          required: true,
        },
        delivery: {
          type: String,
          required: true,
        },
        delivery_status: {
          type: String,
          default: "pending",
        },
        deliveryFee: {
          type: String,
          required: true,
        },
        payment: {
          type: String,
          required: true,
        },
        paymentFee: {
          type: String,
          required: true,
        },
        payment_status: {
          type: String,
          required: true,
        },
        savedMoney: {
          type: Number,
          required: true,
        },
        shopper: {
          type: String,
          required: true,
        },
        supplyPrice: {
          type: Number,
          required: true,
        },
        cartValue: {
          type: Number,
          required: true,
        },
        totalCost: {
          type: Number,
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
