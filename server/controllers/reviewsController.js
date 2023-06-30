const asyncHandler = require("express-async-handler");
const Review = require("../models/reviewModel");

const getReviews = asyncHandler(async (req, res) => {
  const reviews = await Review.find({ userId: req.params.id });
  res.status(200).json(reviews);
});

const getReviewsByProductId = asyncHandler(async (req, res) => {
  const reviews = await Review.find({ productId: req.params.id });
  res.status(200).json(reviews);
});

const setReview = asyncHandler(async (req, res) => {
  //-------Current data
  const { userId, userName, productId, productName, productImage } = req.body;
  const currentTime = new Date().toISOString();

  let userImages = req.body.userImages ? req.body.userImages.split(",") : [];
  const review = await Review.create({
    userId,
    userName,
    userImages,
    userReviewDate: currentTime,
    usersIdVoted: [],
    productId,
    productName,
    productImage,
  });

  res.status(200).send(review);
});

const rateReview = asyncHandler(async (req, res) => {
  const { reviewId, userId, rate } = req.body;

  const findReview = await Review.findById(reviewId);
  const userVotedIndex = findReview.usersIdVoted.findIndex(
    (el) => el === userId
  );

  if (userVotedIndex !== -1) {
    res.status(200).send("0");
  } else {
    const updateFields = {};
    if (rate === "1") {
      updateFields.$inc = { likes: 1 };
    } else {
      updateFields.$inc = { dislikes: 1 };
    }
    updateFields.$push = { usersIdVoted: userId };

    await Review.findByIdAndUpdate(reviewId, updateFields, {
      new: true,
    }).exec();
    res.status(200).send("1");
  }
});

const typeReview = asyncHandler(async (req, res) => {
  const { reviewId, values } = req.body;
  const currentTime = new Date().toISOString();
  const foundReview = await Review.findByIdAndUpdate(reviewId, {
    userReviewDate: currentTime,
    comment: values.comment,
    rate: values.rate,
    isCheckedReview: true,
  });

  res.status(200).send(foundReview);
});

module.exports = {
  getReviews,
  setReview,
  getReviewsByProductId,
  rateReview,
  typeReview,
};
