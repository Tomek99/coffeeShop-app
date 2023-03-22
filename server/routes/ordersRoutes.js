const express = require("express");
const router = express.Router();

const { getOrders } = require("../controllers/ordersController");

router.route("/user-orders/:id").get(getOrders);

module.exports = router;
