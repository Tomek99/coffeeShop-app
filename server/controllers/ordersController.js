const asyncHandler = require("express-async-handler");
const Order = require("../models/productModel");

const setOrder = asyncHandler(async (req, res) => {
  const post = await Order.findByIdAndUpdate(
    _id,
    {
      $push: {
        orders: {},
      },
    },
    { new: true }
  );
  return res.status(200).json(post);
});

module.exports = {
  setOrder,
};
