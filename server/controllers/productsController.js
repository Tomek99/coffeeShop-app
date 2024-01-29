const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
});

const getProduct = asyncHandler(async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.status(200).send(product);
    } else {
      res.status(200).send(false);
    }
  } catch (error) {
    // Handle the error caused by invalid ObjectId
    console.error(error);
    // Return an empty object or a specific response
    res.status(200).send(false);
  }
});

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findByIdAndDelete(req.body.productId);
  res.status(200).send(product);
});

const setProduct = asyncHandler(async (req, res) => {
  const product = await Product.create({
    imageUrl: req.body.imageUrl,
    name: req.body.name,
    price: req.body.price,
    oldPrice: req.body.oldPrice,
    quantity: req.body.quantity,
    origin: req.body.origin,
    intensity: req.body.intensity,
    type: req.body.type,
    weight: req.body.weight,
    brand: req.body.brand,
    available: req.body.available,
  });
  res.send(product).status(200);
});

const updateProduct = asyncHandler(async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.body._id, {
      imageUrl: req.body.imageUrl,
      name: req.body.name,
      price: req.body.price,
      oldPrice: req.body.oldPrice,
      quantity: req.body.quantity,
      origin: req.body.origin,
      intensity: req.body.intensity,
      type: req.body.type,
      weight: req.body.weight,
      brand: req.body.brand,
      available: req.body.available,
    });
    // Check if product is null (not found)
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = {
  getProducts,
  getProduct,
  setProduct,
  deleteProduct,
  updateProduct,
};
