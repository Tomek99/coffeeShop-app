const express = require("express");

const router = express.Router();

const {
  getProducts,
  setProduct,
} = require("../controllers/productsController");

router.route("/").get(getProducts).post(setProduct);

module.exports = router;
