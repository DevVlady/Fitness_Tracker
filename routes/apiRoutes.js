//Source & Reference: Unit 17, Activity 14 & 26
const router = require("express").Router();
const { Workout } = require("../models");
const db = require("../models");

//Route to create a new workout
router.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});
