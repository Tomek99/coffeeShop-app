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
const deleteAddress = asyncHandler(async (req, res) => {
  const { idDocuments, idDocument } = req.body.data;

  const addressesDocument = await Address.findById(idDocuments);

  const documentDeleted = addressesDocument.addresses.filter(({ _id }) => {
    return _id.toString() !== idDocument;
  });

  const newAddressesDocument = await Address.updateOne(
    { _id: idDocuments },
    {
      $set: {
        addresses: documentDeleted,
      },
    }
  );

  req.status(200).json(newAddressesDocument);
});

module.exports = {
  getAddress,
  setAddress,
  getAddresses,
  deleteAddress,
};
