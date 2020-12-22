//Source & Reference: Unit 17, Activity 14 & 26
const router = require("express").Router();
const { Workout } = require("../models");

//Route to create a new workout
router.post("/api/workouts", ({ body }, res) => {
    console.log('**POST**/api/workouts**')
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

//Add details to a workout
router.put("/api/workouts/:id", (req, res) => {
    console.log('**PUT**/api/workouts/:id**')
    Workout.findByIdAndUpdate(
        req.params.id,
        { $push: { exercises: req.body } },
        { new: true }
    )
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

//Route to find existing workouts in database
router.get("/api/workouts", (req, res) => {
    console.log('**GET**/api/workouts**')
    Workout.find({})
        .sort({ date: -1 })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

//Route to find existing workouts in database
router.get("/api/workouts/range", (req, res) => {
    console.log('**GET**api/workouts/range**')
    Workout.find({}, (err, data) => {
        if (err) {
            res.status(400).json(err);
        } else {
            res.json(data);
        }
    })
});

module.exports = router;