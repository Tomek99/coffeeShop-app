const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    imageUrl: {
      type: String,
      required: [true, "Add imageurl"],
    },
    name: {
      type: String,
      required: [true, "Add name"],
    },
    price: {
      type: String,
      required: [true, "Add newPrice"],
    },
    oldPrice: {
      type: String,
      required: false,
    },
    quantity: {
      type: String,
      required: [true, "Add quantity"],
    },
    origin: {
      type: String,
      required: [true, "Add origin"],
    },
    brand: {
      type: String,
      required: [true, "Add brand"],
    },
    intensity: {
      type: String,
      required: [true, "Add intensity"],
    },
    type: {
      type: String,
      required: [true, "Add type"],
    },
    weight: {
      type: String,
      required: [true, "Add type"],
    },

    productRatings: {
      type: Array,
      default: [],
    },

    available: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Products", productSchema);
