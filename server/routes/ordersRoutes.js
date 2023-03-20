const express = require("express");
const router = express.Router();

const { setOrder } = require("../controllers/ordersController");

router.route("user-order").post(setOrder);

module.exports = router;
