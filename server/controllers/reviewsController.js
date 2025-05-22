const asyncHandler = require("express-async-handler");
const Review = require("../models/reviewModel");
const Product = require("../models/productModel");

const getReviews = asyncHandler(async (req, res) => {
  const reviews = await Review.find({ userId: req.params.id });
  res.status(200).json(reviews);
});

const getAllReviews = asyncHandler(async (req, res) => {
  const reviews = await Review.find();
  res.status(200).json(reviews);
});

const getReviewsByProductId = asyncHandler(async (req, res) => {
  const reviews = await Review.find({ productId: req.params.id });
  res.status(200).json(reviews || []);
});

const deleteAllReviews = asyncHandler(async (req, res) => {
  const result = await Review.deleteMany({});

  res.status(200).json({
    message: "All reviews have been deleted",
    deletedCount: result.deletedCount, // Number of deleted documents
  });
});

const setReview = asyncHandler(async (req, res) => {
  //Dodanie recenzji do panelu użytkownika
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

  res.status(200).send(review.id);
});

// Klient wystawia ocene recenzji innemu użytkownikowi na zasadzie łapki w górę lub w dół
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

// Klient wystawia recenzje na temat zakupionego produktu
const typeReview = asyncHandler(async (req, res) => {
  const { reviewId, values } = req.body;
  console.log(req.body);
  const currentTime = new Date().toISOString();
  const foundReview = await Review.findByIdAndUpdate(
    reviewId,
    {
      userReviewDate: currentTime,
      comment: values.comment,
      rate: values.rate,
      isUserAddedReview: true,
    },
    { new: true }
  );

  try {
    await Product.findByIdAndUpdate(
      values.productId,
      {
        $push: {
          productRatings: values.rate,
        },
      },
      { new: true }
    );
  } catch (error) {
    console.log(error);
  }

  res.status(200).send(foundReview);
});

const putReviewDecision = asyncHandler(async (req, res) => {
  const { id, decision, selectedReason, comment } = req.body;

  try {
    const post = await Review.findByIdAndUpdate(id, {
      isModeratorApprovedReview: decision,
      moderatorAttention: selectedReason,
      extraMmoderatorAttention: comment,
    });
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
  }
});

const deleteReview = asyncHandler(async (req, res) => {
  const { id } = req.body;
  console.log(id);
  try {
    const post = await Review.findByIdAndDelete(id);
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
  }
});

//
const resetThumbsFromUserReview = asyncHandler(async (req, res) => {
  const { reviewId } = req.body;

  try {
    const post = await Review.findByIdAndUpdate(
      reviewId,
      {
        usersIdVoted: [],
        likes: 0,
        dislikes: 0,
      },
      { new: true }
    );
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
  }
});

//Dodanie gotowej recenzji do testowania
const setCompletedReviewForTesting = asyncHandler(async (req, res) => {
  const { userId } = req.body;
  const currentTime = new Date().toISOString();
  const review = await Review.create({
    userId,
    userName: "Test Test2",
    userImages: [],
    userReviewDate: currentTime,
    usersIdVoted: [],
    productId: "63dc0405c2a0e09b2d62f8f0",
    productName: "Espresso Italiano Aromatico",
    productImage:
      "https://res.cloudinary.com/dvoduabha/image/upload/v1679902515/coffee/lavazza/beans/6_EspressoItalianoAromatico_oi2cfv.png",
    isUserAddedReview: true,
    isModeratorApprovedReview: "approved",
    comment: "good WORKING",
    rate: 5,
  });

  res.status(200).send(review._id);
});

module.exports = {
  getReviews,
  setReview,
  getReviewsByProductId,
  rateReview,
  typeReview,
  getAllReviews,
  putReviewDecision,
  deleteReview,
  deleteAllReviews,
  resetThumbsFromUserReview,
  setCompletedReviewForTesting,
};
