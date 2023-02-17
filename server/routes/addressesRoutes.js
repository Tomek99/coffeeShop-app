const express = require("express");
const router = express.Router();
const {
  getAddress,
  setAddress,
  getAddresses,
  deleteAddress,
} = require("../controllers/addressesController");

router.route("/").get(getAddresses);

router.route("/user-address").post(setAddress);
router.route("/user-address/deleteAddress").put(deleteAddress);
router.route("/user-address/:id").get(getAddress);

module.exports = router;
