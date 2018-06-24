const express = require("express");
const router = express.Router();

const { Profile } = require("../models/profile");

router.get("/", (req,res) => {
    res.render("form");
});

router.post("/", (req,res) => {
    res.send(req.body);
});

module.exports = router;