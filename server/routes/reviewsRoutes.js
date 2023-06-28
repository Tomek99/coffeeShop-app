const express = require("express");
const router = express.Router();
const {
  getReviews,
  setReview,
  getReviewsByProductId,
  rateReview,
  typeReview,
} = require("../controllers/reviewsController");

router.route("/user-reviews/:id").get(getReviews);
router.route("/product-reviews/:id").get(getReviewsByProductId);
router.route("/create-review").post(setReview);
router.route("/rate-review").put(rateReview);
router.route("/type-review").put(typeReview);

module.exports = router;
