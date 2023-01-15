const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrpyt = require("bcryptjs");

// @route GET/api/auth/test
// @desc Test the auth route
// @access Public
router.get("/data", (req, res) => {
  res.send("Auth route working");
});

// @route POST /api/auth/register
// @desc Create a new user
// @access Public

router.post("/register", async (req, res) => {
  try {
    //has the password
    const hashedPassword = await bcrpyt.hash(req.body.password, 12);
    // create a new user
    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: hashedPassword,
      email: req.body.email,
      acceptTerms: req.body.acceptTerms,
      checkAll: req.body.checkAll,
      checked: req.body.checked,
    });
    // save the user to the database
    const savedUser = await newUser.save();

    // return the new user
    return res.json(savedUser);
  } catch (e) {
    console.log(e);

    res.status(500).send(e.message);
  }
});

module.exports = router;
