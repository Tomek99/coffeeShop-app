const express = require("express");
const router = express.Router();
const {
  getAddress,
  setAddress,
  getAddresses,
} = require("../controllers/addressesController");

router.route("/").get(getAddresses);

router.route("/user-address").post(setAddress);
router.route("/user-address/:id").get(getAddress).post(setAddress);

module.exports = router;
