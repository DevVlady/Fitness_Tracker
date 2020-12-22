//HTML Routes
const path = require("path");
const router = require("express").Router();

//Route to home page(root route)
router.get("/", (req, res) => {
    console.log('**/**index.html route**');
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

//Route to the stats page
router.get("/stats", (req, res) => {
    console.log('**/stats**stats.html route**')
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

//Route to the exercise page
router.get("/exercise", (req, res) => {
    console.log('**/exercise**exercise.html route**')
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

module.exports = router;