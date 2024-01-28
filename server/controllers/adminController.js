const asyncHandler = require("express-async-handler");
const Admin = require("../models/adminModel");
const bcrypt = require("bcrypt");
const getAdmins = asyncHandler(async (req, res) => {
  const adminPanelUsers = await Admin.find();
  res.status(200).json(adminPanelUsers);
});

const findSingleAdmin = asyncHandler(async (req, res) => {
  const { adminLogin, adminPassword } = req.body;
  const admin = await Admin.findOne({ adminLogin });

  if (
    admin !== null &&
    (await bcrypt.compare(adminPassword, admin.adminPassword))
  ) {
    return res.status(200).json(admin);
  } else {
    res.status(200).json(false);
  }
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

const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.body;
  const post = await Admin.findByIdAndDelete(req.body.id);
  res.status(200).json(post);
});

module.exports = {
  getAdmins,
  findSingleAdmin,
  postUser,
  deleteUser,
};
