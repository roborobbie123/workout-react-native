const express = require("express");

const workoutController = require("../controllers/workoutController");

const router = express.Router();

router.post("/new", workoutController.createWorkout);

module.exports = router;
