const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    imageUrl: {
      type: String,
      require: [true, "Add imageurl"],
    },
    name: {
      type: String,
      require: [true, "Add name"],
    },
    newPrice: {
      type: String,
      require: [true, "Add newPrice"],
    },
    oldPrice: {
      type: String,
      require: false,
    },
    quantity: {
      type: Number,
      require: [true, "Add quantity"],
    },
    origin: {
      type: String,
      require: [true, "Add origin"],
    },
    brand: {
      type: String,
      require: [true, "Add brand"],
    },
    intensity: {
      type: Number,
      require: [true, "Add intensity"],
    },
    type: {
      type: String,
      require: [true, "Add type"],
    },
    weight: {
      type: String,
      require: true,
    },
    rate: {
      type: Number,
      require: [true, "Add rate"],
    },
    available: {
      type: Boolean,
      require: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Products", productSchema);
