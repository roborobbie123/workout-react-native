const mongoose = require("mongoose");

const workoutSchema = mongoose.Schema({
  date: { type: Date, required: true },
  exercises: [
    {
      name: { type: String, required: true },
      sets: [
        {
          reps: { type: Number, required: true },
          weight: { type: Number, required: true },
        },
      ],
    },
  ],
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

module.exports = mongoose.model("Workout", workoutSchema);
