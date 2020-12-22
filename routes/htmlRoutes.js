//HTML Routes
const path = require("path");
const router = require("express").Router();

//Route to home page(root route)
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;