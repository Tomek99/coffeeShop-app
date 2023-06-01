const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const Address = require("../models/addressModel");
const Invoice = require("../models/invoiceModel");
const Order = require("../models/orderModel");
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
  const salt = await bcrypt.genSalt(10);
  const { firstName, lastName, email } = req.body;
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  try {
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      number: "",
      loggedDevices: [],
      orders: await Order.create({
        orders: [],
      }),
      addresses: await Address.create({
        addresses: [],
      }),
      invoices: await Invoice.create({
        invoices: [],
      }),
    });

    res.send(user);
    res.status(200);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

module.exports = {
  getUsers,
  isUserExist,
  setUser,
  logIn,
};
