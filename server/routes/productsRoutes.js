const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProduct,
  setProduct,
  deleteProduct,
} = require("../controllers/productsController");

router.route("/").get(getProducts).post(setProduct).delete(deleteProduct);
router.route("/product-details/:id").get(getProduct);

module.exports = router;
