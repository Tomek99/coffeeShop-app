const express = require("express");
const router = express.Router();
const { getReviews, setReview } = require("../controllers/reviewsController");

router.route("/user-reviews/:id").get(getReviews);
router.route("/create-review").post(setReview);

module.exports = router;
