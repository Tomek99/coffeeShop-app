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
  return res.status(200).json(post);
});

const deleteInvoice = asyncHandler(async (req, res) => {
  const { idDocuments, idDocument } = req.body.data;

  const invociesDocument = await Invoice.findById(idDocuments);

  const documentDeleted = invociesDocument.invoices.filter(({ _id }) => {
    return _id.toString() !== idDocument;
  });

  const new_invoice = await Invoice.findByIdAndUpdate(
    idDocuments,
    {
      $set: {
        invoices: documentDeleted,
      },
    },
    { new: true }
  );

  res.status(200).json(new_invoice);
});

const editInvoice = asyncHandler(async (req, res) => {
  const find_user_invoice = await Invoice.findById(req.body.idDocuments);

  const find_and_update_invoice = find_user_invoice.invoices.map((item) => {
    if (item._id.toString() === req.body._id) {
      item.NIP = req.body.NIP;
      item.name = req.body.name;
      item.street = req.body.street;
      item.ZIP_code = req.body.ZIP_code;
      item.city = req.body.city;
      return item;
    } else {
      return item;
    }
  });

  const update_data = await Invoice.findByIdAndUpdate(
    req.body.idDocuments,
    {
      $set: {
        invoices: find_and_update_invoice,
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
