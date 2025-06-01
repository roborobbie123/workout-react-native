const mongoose = require("mongoose");

const Workout = require("../models/workout");
const User = require("../models/user");

const createWorkout = async (req, res, next) => {
  const { date, exercises, user } = req.body;

  // Checks if there is an existing user 
  let existingUser;
  try {
    existingUser = await User.findById(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "User error has occurred." });
  }

  if (!existingUser) {
    return res.status(404).json({ message: "User not found."})
  }

  // Attempts to create and save a workout
  try {
    const newWorkout = new Workout({
      date,
      exercises,
      user,
    });

    await newWorkout.save();

    await User.findByIdAndUpdate(user, {
      $push: { workouts: newWorkout._id },
    });

    res.status(201).json(newWorkout);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "error has occurred" });
  }
};

const editWorkout = async (req, res, next) => {};

const deleteWorkout = async (req, res, next) => {};

const getWorkouts = async (req, res, next) => {};

exports.createWorkout = createWorkout;
