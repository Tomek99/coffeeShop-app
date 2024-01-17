const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
});

const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.status(200).send(product);
});

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findByIdAndDelete(req.body.productId);
  res.status(200).send(product);
});

const setProduct = asyncHandler(async (req, res) => {
  const product = await Product.create({
    imageUrl: req.body.imageUrl,
    name: req.body.name,
    newPrice: req.body.newPrice,
    oldPrice: req.body.oldPrice,
    quantity: req.body.quantity,
    origin: req.body.origin,
    intensity: req.body.intensity,
    type: req.body.type,
    weight: req.body.weight,
    brand: req.body.brand,
    rate: req.body.rate,
    available: req.body.available,
  });

  res.send(product);

  res.status(200);
});

module.exports = {
  getProducts,
  getProduct,
  setProduct,
  deleteProduct,
};
