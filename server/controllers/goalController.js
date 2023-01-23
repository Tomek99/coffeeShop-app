const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

//@desc GET goals
//@route GET /api/goals
//@access Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await User.find();
  res.status(200).json(goals);
});

const isUserExist = asyncHandler(async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (Boolean(user)) {
    return res.status(200).json(false);
  }
  return res.json(true);
});

//@desc Set goals
//@route POST /api/goals
//@access Private
const setGoals = asyncHandler(async (req, res) => {
  const check =
    req.body.firstName &&
    req.body.lastName &&
    req.body.email &&
    req.body.password;

  if (Boolean(!check)) {
    res.status(400);
    throw new Error("Add text");
  }
  const salt = await bcrypt.genSalt(10);
  const hasshedPassword = await bcrypt.hash(req.body.password, salt);

  const user = await User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: hasshedPassword,
    email: req.body.email,
  });

  res.send(user);

  res.status(200);
});

//@desc Update goals
//@route PUT /api/goals
//@access Private
const updateGoals = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }

  const updatedUser = await User.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  );
  res.status(200).json(updatedUser);
});

//@desc Delete goals
//@route DELETE /api/goals
//@access Private
const deleteGoals = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }

  const deleteUser = await User.findByIdAndDelete(req.params.id, { new: true });
  res.send(deleteUser);
});

module.exports = {
  getGoals,
  isUserExist,
  setGoals,
  updateGoals,
  deleteGoals,
};
