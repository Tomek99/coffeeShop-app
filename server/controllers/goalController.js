//@desc GET goals
//@route GET /api/goals
//@access Private
const getGoals = (req, res) => {
  res.status(200).json({ message: "Get goals" });
};

//@desc Set goals
//@route POST /api/goals
//@access Private
const setGoals = (req, res) => {
  if (!req.body.text) {
    res.status(400).json({ message: "Please add a text field" });
    throw new Error("Please add a text field");
  }
  res.status(200).json({ message: "Set goals" });
};

//@desc Update goals
//@route PUT /api/goals
//@access Private
const updateGoals = (req, res) => {
  res.status(200).json({ message: "Set goals" });
};

//@desc Delete goals
//@route DELETE /api/goals
//@access Private
const deleteGoals = (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
