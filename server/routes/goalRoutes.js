const express = require("express");
const router = express.Router();
const {
  getGoals,
  isUserExist,
  setGoals,
  updateGoals,
  deleteGoals,
  logIn,
} = require("../controllers/goalController");

//CRUD CREATE RELOAD UPDATE DELETE

router.route("/").get(getGoals).post(setGoals);

router.route("/register/validEmail").post(isUserExist);

router.route("/login").post(logIn);

router.route("/:id").put(updateGoals).delete(deleteGoals);

module.exports = router;
