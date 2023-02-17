const express = require("express");
const router = express.Router();
const {
  getAddress,
  setAddress,
  getAddresses,
  deleteAddress,
  editAddress,
} = require("../controllers/addressesController");

router.route("/").get(getAddresses);

router.route("/user-address/:id").get(getAddress);
router.route("/user-address").post(setAddress);
router.route("/user-address/edit-address").put(editAddress);
router.route("/user-address/deleteAddress").put(deleteAddress);

module.exports = router;
