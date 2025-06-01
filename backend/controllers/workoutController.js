const mongoose = require("mongoose");

const Workout = require("../models/workout");
const Exercise = require("../models/exercise");
const User = require("../models/user");

const createWorkout = async (req, res, next) => {
  const { date, exercises, user } = req.body;

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
    res.status(500).json({ message: "Workout creation failed" });
  }
};

const editWorkout = async (req, res, next) => {};

const deleteWorkout = async (req, res, next) => {};

const getWorkouts = async (req, res, next) => {};

exports.createWorkout = createWorkout;