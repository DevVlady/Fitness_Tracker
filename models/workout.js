//Source & Reference: Unit 17, Activity 14 & 26
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                trim: true,
                required: "Enter a type of workout"
            },
            name: {
                type: String,
                trim: true,
                required: "Enter a name for workout"
            },
            weight: {
                type: Number,
                // trim: true,
                required: "Enter weight for workout"
            },
            sets: {
                type: Number,
                // trim: true,
                required: "Enter sets for workout"
            },
            reps: {
                type: Number,
                // trim: true,
                required: "Enter reps for workout"
            },
            duration: {
                type: Number,
                // trim: true,
                required: "Enter a duration for workout"
            },
        }
    ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;