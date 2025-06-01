const mongoose = require("mongoose");

const User = require("../models/user");
const Workout = require("../models/workout");
const { sign } = require("jsonwebtoken");

const signUp = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const newUser = new User({
      email,
      password,
    });

    await newUser.save();

    res.status(201).json({ newUser });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Sign Up failed." });
  }
};

const logIn = async (req, res, next) => {
  const { email, password } = req.body;

  // Checks to see if email exists in database
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "User error occurred" });
  }

  if (!existingUser) {
    return res.status(400).json({ message: "Invalid email address" });
  }

  res.status(200).json({ message: 'Signed In'});

  // Password verification required
};

const getUsers = async (req, res, next) => {
  let users;

  try {
    users = await User.find({}, "-password");
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Unable to retrieve users" });
  }

  res.json({ users: users.map((user) => user.toObject({ getters: true })) });
};

exports.signUp = signUp;
exports.logIn = logIn;
exports.getUsers = getUsers;
