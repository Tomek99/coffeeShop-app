const express = require("express");
const router = express.Router();

const {
  getOrders,
  createOrder,
  getAllUsersOrders,
} = require("../controllers/ordersController");

router.route("").get(getAllUsersOrders);
router.route("/user-orders/:id").get(getOrders);
router.route("/createOrder").post(createOrder);

module.exports = router;
