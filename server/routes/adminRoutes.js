const express = require("express");
const router = express.Router();

const {
  getAdmins,
  findSingleAdmin,
  postUser,
  deleteUser,
} = require("../controllers/adminController");

router.route("/getUsers").get(getAdmins);
router.route("/findSingleAdmin").post(findSingleAdmin);
router.route("/postUser").post(postUser);
router.route("/deleteUser").delete(deleteUser);

module.exports = router;
