const express = require("express");
const router = express.Router();

const { getOrders, createOrder } = require("../controllers/ordersController");

router.route("/user-orders/:id").get(getOrders);
router.route("/createOrder").post(createOrder);

module.exports = router;
