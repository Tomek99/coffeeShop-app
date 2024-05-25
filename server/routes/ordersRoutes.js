const express = require("express");
const router = express.Router();

const {
  getOrders,
  createOrder,
  getAllUsersOrders,
  getSelectedPurchaseDetails,
} = require("../controllers/ordersController");

router.route("").get(getAllUsersOrders);
router.route("/user-orders/:id").get(getOrders);
router.route("/createOrder").post(createOrder);
router.route("/getSelectedPurchaseDetails").post(getSelectedPurchaseDetails);

module.exports = router;
