const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    userName: {
      type: String,
      require: true,
    },
    userImages: {
      type: Array,
      require: true,
    },
    productId: {
      type: String,
      require: true,
    },
    productName: {
      type: String,
      require: true,
    },
    productImage: {
      type: String,
      require: true,
    },
    comment: {
      type: String,
      require: true,
    },
    rate: {
      type: Number,
      require: true,
    },
    likes: {
      type: Number,
      require: true,
    },
    dislikes: {
      type: Number,
      require: true,
    },
    isVoted: {
      type: Boolean,
      require: true,
    },
    amountVotes: {
      type: Array,
      require: true,
    },
    isCheckedReview: {
      type: Boolean,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Review", invoiceSchema);
