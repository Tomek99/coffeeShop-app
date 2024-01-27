const asyncHandler = require("express-async-handler");
const Admin = require("../models/adminModel");
const bcrypt = require("bcrypt");
const getAdmins = asyncHandler(async (req, res) => {
  const adminPanelUsers = await Admin.find();
  res.status(200).json(adminPanelUsers);
});

const getSingleAdmin = asyncHandler(async (req, res) => {
  const adminPanelUsers = await Admin.findById(req.params.id);
});
const postUser = asyncHandler(async (req, res) => {
  const { adminName, adminLogin, adminPassword, adminMode } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(adminPassword, salt);

  const post = await Admin.create({
    adminName,
    adminLogin,
    adminPassword: hashedPassword,
    adminMode,
  });

  res.status(200).json(post);
});

module.exports = {
  getAdmins,
  getSingleAdmin,
  postUser,
};
