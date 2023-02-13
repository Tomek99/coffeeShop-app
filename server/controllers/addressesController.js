const asyncHandler = require("express-async-handler");
const Address = require("../models/addressModel");

const getAddresses = asyncHandler(async (req, res) => {
  const addresses = await Address.find();
  res.status(200).json(addresses);
});

const getAddress = asyncHandler(async (req, res) => {
  const addresses = await Address.findById(req.params.id);
  res.status(200).json(addresses);
});

const setAddress = asyncHandler(async (req, res) => {
  console.log("HI");
  const { _id, name, street, house, city, number, email, ZIP_code } = req.body;
  const post = await Address.findByIdAndUpdate(
    _id,
    {
      $push: {
        addresses: {
          name: name,
          street: street,
          house: house,
          ZIP_code: ZIP_code,
          city: city,
          number: number,
          email: email,
        },
      },
    },
    { new: true }
  );
  return res.status(200).json(post);
});

module.exports = {
  getAddress,
  setAddress,
  getAddresses,
};
