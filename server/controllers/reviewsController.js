const asyncHandler = require("express-async-handler");
const Review = require("../models/reviewModel");

const getReviews = asyncHandler(async (req, res) => {
  const reviews = await Review.find({ userId: req.params.id });
  res.status(200).json(reviews);
});

const setReview = asyncHandler(async (req, res) => {
  const review = await Review.create({
    userId: req.body.userId,
    userName: req.body.name,
    userImages: [],
    productId: req.body.productId,
    productName: req.body.name,
    productImage: req.body.productImage,
    comment: "",
    rate: 0,
    likes: 0,
    dislikes: 0,
    isVoted: false,
    amountVotes: [],
    checkedReview: false,
  });

  res.send(review).status(200);
});

module.exports = {
  getReviews,
  setReview,
};
