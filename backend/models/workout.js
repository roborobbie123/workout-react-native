const mongoose = require("mongoose");

const workoutSchema = mongoose.Schema({
  date: { type: Date, required: true },
  exercises: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Exercise", required: true },
  ],
  user: [{ type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }],
});

module.exports = mongoose.model("Workout", workoutSchema);
