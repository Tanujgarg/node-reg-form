const express = require("express");
const router = express.Router();

const { Profile } = require("../models/profile");

router.get("/", (req,res) => {
    res.render("form");
});

router.post("/", (req,res) => {
    res.render("user-filled-form", {
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile
    });
});
router.put("/", (req,res) => {
    console.log(req.body);
    res.send(req.body);
});

module.exports = router;