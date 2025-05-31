const mongoose = require("mongoose");

const setSchema = mongoose.Schema({
  reps: { type: Number, required: true },
  weight: { type: Number, required: true },
});

const exerciseSchema = mongoose.Schema({
  name: { type: String, required: true },
  sets: { type: [setSchema], required: true },
});

module.exports = mongoose.model("Exercise", exerciseSchema);
