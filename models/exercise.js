//Source & reference: Unit 17, Activity 14
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  workout: [
    {
      type: Schema.Types.ObjectId,
      ref: "workout"
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;