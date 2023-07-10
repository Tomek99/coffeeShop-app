const mongoose = require("mongoose");

let today = new Date();
const dd = String(today.getDate()).padStart(2, "0");
const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
const yyyy = today.getFullYear();
today = dd + " " + mm + " " + yyyy;

const orderSchema = new mongoose.Schema(
  {
    userId: { type: String, require: true },
    paymentIntentId: { type: String },
    products: [
      {
        id: { type: String },
        name: { type: String },
        imageUrl: { type: String },
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

    date: {
      type: String,
      default: today,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);
