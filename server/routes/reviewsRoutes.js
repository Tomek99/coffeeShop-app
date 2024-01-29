const express = require("express");
const router = express.Router();
const {
  getAllReviews,
  getReviews,
  setReview,
  getReviewsByProductId,
  rateReview,
  typeReview,
  putReviewDecision,
} = require("../controllers/reviewsController");

router.route("").get(getAllReviews);
router.route("/user-reviews/:id").get(getReviews);
router.route("/product-reviews/:id").get(getReviewsByProductId);
router.route("/create-review").post(setReview);
router.route("/rate-review").put(rateReview);
router.route("/type-review").put(typeReview);
router.route("/put-review-decision").put(putReviewDecision);

module.exports = router;
