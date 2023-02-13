const express = require("express");
const router = express.Router();
const {
  getInvoices,
  getInvoice,
  setInvoice,
} = require("../controllers/invoicesController");

router.route("/").get(getInvoice).post(getInvoices);

router.route("/user-invoice").post(setInvoice);
router.route("/user-invoice/:id").get(getInvoice);

module.exports = router;
