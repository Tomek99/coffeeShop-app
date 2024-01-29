const express = require("express");
const router = express.Router();
const {
  getInvoices,
  getInvoice,
  setInvoice,
  deleteInvoice,
  editInvoice,
} = require("../controllers/invoicesController");

router.route("/").get(getInvoice).post(getInvoices);
router.route("/user-invoice/:id").get(getInvoice);
router.route("/user-invoice").post(setInvoice);
router.route("/user-invoice/edit-invoice").put(editInvoice);
router.route("/user-invoice/deleteInvoice").put(deleteInvoice);

module.exports = router;
