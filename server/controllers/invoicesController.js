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
  console.log("hello");
  const { _id, NIP, name, street, ZIP_code, city } = req.body;
  const post = await Invoice.findByIdAndUpdate(
    _id,
    {
      $push: {
        invoices: {
          NIP,
          name,
          street,
          ZIP_code,
          city,
        },
      },
    },
    { new: true }
  );
  return res.status(200).json(post);
});

const deleteInvoice = asyncHandler(async (req, res) => {
  const { idDocuments, idDocument } = req.body.data;

  const find_data = await Invoice.findById(idDocuments);
  const clone = { ...find_data };

  const delete_invoice = clone._doc.invoices.filter(({ _id }) => {
    return _id.toString() !== idDocument;
  });

  const new_invoice = await Invoice.findByIdAndUpdate(
    idDocuments,
    {
      $set: {
        invoices: delete_invoice,
      },
    },
    { new: true }
  );

  res.status(200).json(new_invoice);
});

const editInvoice = asyncHandler(async (req, res) => {
  const find_data = await Invoice.findById(req.body.idDocuments);

  const update_invoice = find_data.invoices.map((item) => {
    if (item._id.toString() === req.body._id) {
      const { NIP, name, street, ZIP_code, city, _id } = req.body;
      return {
        NIP,
        name,
        street,
        ZIP_code,
        city,
        _id,
      };
    } else {
      return item;
    }
  });

  const update_data = await Invoice.findByIdAndUpdate(
    req.body.idDocuments,
    {
      $set: {
        invoices: update_invoice,
      },
    },
    { new: true }
  );
  res.status(200).json(update_data);
});
module.exports = {
  getInvoices,
  getInvoice,
  setInvoice,
  deleteInvoice,
  editInvoice,
};
