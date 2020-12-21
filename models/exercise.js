//Source & Reference: Unit 17, Activity 14 & 26
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Enter a type of exercise"
  },
  name: {
    type: String,
    trim: true,
    required: "Enter a name for exercise"
  },
  weight: {
    type: Number,
    // trim: true,
    required: "Enter weight for exercise"
  },
  sets: {
    type: Number,
    // trim: true,
    required: "Enter sets for exercise"
  },
  reps: {
    type: Number,
    // trim: true,
    required: "Enter reps for exercise"
  },
  duration: {
    type: Number,
    // trim: true,
    required: "Enter a duration for exercise"
  },
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;