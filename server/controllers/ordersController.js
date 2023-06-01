const asyncHandler = require("express-async-handler");
const Order = require("../models/orderModel");

const getOrders = asyncHandler(async (req, res) => {
  const get_data = await Order.findById(req.params.id);
  res.status(200).json(get_data);
});

module.exports = {
  getOrders,
};
