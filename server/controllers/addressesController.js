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

  const find_data = await Address.findById(idDocuments);
  const clone = { ...find_data };

  const delete_address = clone._doc.addresses.filter(({ _id }) => {
    return _id.toString() !== idDocument;
  });

  const new_address = await Address.findByIdAndUpdate(
    idDocuments,
    {
      $set: {
        addresses: delete_address,
      },
    },
    { new: true }
  );

  res.status(200).json(new_address);
});

const editAddress = asyncHandler(async (req, res) => {
  const find_data = await Address.findById(req.body.idDocuments);
  const clone = { ...find_data };

  const update_address = clone._doc.addresses.map((item) => {
    if (item._id.toString() === req.body._id) {
      const { name, street, house, ZIP_code, city, number, email, _id } =
        req.body;
      return {
        name,
        street,
        house,
        ZIP_code,
        city,
        number,
        email,
        _id,
      };
    } else {
      return item;
    }
  });

  const update_data = await Address.findByIdAndUpdate(
    req.body.idDocuments,
    {
      $set: {
        addresses: update_address,
      },
    },
    { new: true }
  );
  res.status(200).json(update_data);
});

module.exports = {
  getAddress,
  setAddress,
  getAddresses,
  deleteAddress,
  editAddress,
};
