const asyncHandler = require("express-async-handler");
const Invoice = require("../models/invoiceModel");

const getInvoices = asyncHandler(async (req, res) => {
  const invoices = await Invoice.find();
  res.status(200).json(invoices);
});

const getInvoice = asyncHandler(async (req, res) => {
  const addresses = await Invoice.findById(req.params.id);
  res.status(200).json(addresses);
});

const setInvoice = asyncHandler(async (req, res) => {
  const { _id, NIP, name, street, ZIP_code, city } = req.body;
  console.log(_id);
  const post = await Invoice.findByIdAndUpdate(
    _id,
    {
      $push: {
        invoices: {
          NIP: NIP,
          name: name,
          street: street,
          ZIP_code: ZIP_code,
          city: city,
        },
      },
    },
    { new: true }
  );
  res.status(200).json(post);

  return res.status(200).json(post);
});

module.exports = {
  getInvoices,
  getInvoice,
  setInvoice,
};
