const asyncHandler = require("express-async-handler");
const Order = require("../models/orderModel");

const getAllUsersOrders = asyncHandler(async (req, res) => {
  const response = await Order.find();
  res.status(200).json(response);
});

const getSelectedPurchaseDetails = asyncHandler(async (req, res) => {
  try {
    const response = await Order.findById(req.body.id);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(200).json({}); // Send a response in case of error
  }
});

const getOrders = asyncHandler(async (req, res) => {
  const get_data = await Order.find({ userId: req.params.id });
  res.status(200).json(get_data || []);
});

const createOrder = asyncHandler(async (req, res) => {
  const product = await Order.create({
    userId: req.body.userId,
    paymentIntentId: req.body.payment_intent,
    products: [],
    shipping: {},
    payment_status: "true",
    subtotal: "3232",
    total: "2323",
  });

  res.status(200).send(product);
});

module.exports = {
  getOrders,
  getAllUsersOrders,
  getSelectedPurchaseDetails,
  createOrder,
};
