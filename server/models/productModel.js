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
      type: Number,
      require: [true, "Add newPrice"],
    },
    oldPrice: {
      type: Number,
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
