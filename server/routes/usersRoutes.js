const express = require("express");
const router = express.Router();
const {
  getUsers,
  isUserExist,
  setUser,
  updateGoals,
  deleteGoals,
  logIn,
} = require("../controllers/usersController");

//CRUD CREATE RELOAD UPDATE DELETE

router.route("/").get(getUsers).post(setUser);

router.route("/register/validEmail").post(isUserExist);

router.route("/login").post(logIn);

router.route("/:id").put(updateGoals).delete(deleteGoals);

module.exports = router;
