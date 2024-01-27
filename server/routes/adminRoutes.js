const express = require("express");
const router = express.Router();

const {
  getAdmins,
  getSingleAdmin,
  postUser,
} = require("../controllers/adminController");

router.route("/getUsers").get(getAdmins);
router.route("/getSingleUser/:id").get(getSingleAdmin);
router.route("/postUser").post(postUser);

module.exports = router;
