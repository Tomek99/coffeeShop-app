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
    userReviewDate: {
      type: Date,
      require: true,
    },
    userImages: [{ type: String, require: true }],
    productId: {
      type: String,
      require: true,
    },
    usersIdVoted: [{ type: String, require: true }],
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
      default: "",
    },
    rate: {
      type: Number,
      require: true,
      default: 0,
    },
    likes: {
      type: Number,
      require: true,
      default: 0,
    },
    dislikes: {
      type: Number,
      require: true,
      default: 0,
    },
    isUserAddedReview: {
      type: Boolean,
      default: false,
    },
    isModeratorApprovedReview: {
      type: String,
      default: "checking",
    },
    moderatorAttention: {
      type: String,
      default: "",
    },
    extraMmoderatorAttention: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Review", invoiceSchema);
