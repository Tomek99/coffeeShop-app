const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Address = require("../models/addressModel");
const Invoice = require("../models/invoiceModel");
const bcrypt = require("bcrypt");

//@desc GET goals
//@route GET /api/goals
//@access Private
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

const isUserExist = asyncHandler(async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (Boolean(user)) {
    return res.status(200).json(false);
  }
  return res.status(200).json(true);
});

const logIn = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user !== null && (await bcrypt.compare(password, user.password))) {
    return res.status(200).json(user);
  } else {
    res.status(400);
    throw new Error("Wrong password or email");
  }
});

//@desc Set goals
//@route POST /api/goals
//@access Private
const setUser = asyncHandler(async (req, res) => {
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
  const { firstName, lastName, emial } = req.body;
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = await User.create({
    firstName,
    lastName,
    emial,
    password: hashedPassword,
    number: null,
    addresses: await Address.create({
      addresses: [],
    }),
    invoices: await Invoice.create({
      invoices: [],
    }),
  });

  res.send(user);
  res.status(200);
});

module.exports = {
  getUsers,
  isUserExist,
  setUser,
  logIn,
};
