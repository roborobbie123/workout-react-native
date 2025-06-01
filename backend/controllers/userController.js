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
exports.getUsers = getUsers;