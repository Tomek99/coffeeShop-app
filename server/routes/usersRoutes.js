const express = require("express");
const router = express.Router();
const {
  getUsers,
  isUserExist,
  setUser,
  logIn,
} = require("../controllers/usersController");

//CRUD CREATE RELOAD UPDATE DELETE

router.route("/").get(getUsers).post(setUser);

router.route("/register/validEmail").post(isUserExist);

router.route("/login").post(logIn);

module.exports = router;
