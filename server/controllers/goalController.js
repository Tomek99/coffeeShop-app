const asyncHandler = require("express-async-handler");

//@desc GET goals
//@route GET /api/goals
//@access Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get goals" });
});

//@desc Set goals
//@route POST /api/goals
//@access Private
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Add textf");
  }
  res.status(200).json({ message: req.body.text });
});

//@desc Update goals
//@route PUT /api/goals
//@access Private
const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Set goals" });
});

//@desc Delete goals
//@route DELETE /api/goals
//@access Private
const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
