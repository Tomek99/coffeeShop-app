const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
});

const setProduct = asyncHandler(async (req, res) => {
  const product = await Product.create({
    imageUrl: req.body.imageUrl,
    name: req.body.name,
    newPrice: req.body.newPrice,
    oldPrice: req.body.oldPrice,
    quantity: req.body.quantity,
    origin: req.body.origin,
    rate: req.body.rate,
    available: req.body.available,
  });

  res.send(product);

  res.status(200);
});

module.exports = {
  getProducts,
  setProduct,
};
