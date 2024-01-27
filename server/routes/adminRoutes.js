const express = require("express");
const router = express.Router();

const {
  getAdmins,
  getSingleAdmin,
  postUser,
  deleteUser,
} = require("../controllers/adminController");

router.route("/getUsers").get(getAdmins);
router.route("/getSingleUser/:id").get(getSingleAdmin);
router.route("/postUser").post(postUser);
router.route("/deleteUser").delete(deleteUser);

module.exports = router;
