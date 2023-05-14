const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProduct,
  setProduct,
} = require("../controllers/productsController");

router.route("/").get(getProducts).post(setProduct);
router.route("/product-details/:id").get(getProduct);

module.exports = router;
