const express = require("express");
const router = express.Router();
const {
  getReviews,
  setReview,
  getReviewsByProductId,
} = require("../controllers/reviewsController");

router.route("/user-reviews/:id").get(getReviews);
router.route("/product-reviews/:id").get(getReviewsByProductId);
router.route("/create-review").post(setReview);

module.exports = router;
