const express = require("express");
const router = express.Router();

const { Profile } = require("../models/profile");

router.get("/", (req,res) => {
    res.render("form");
});

router.post("/", (req,res) => {
    let profile = new Profile(req.body);
    profile.save((err, data) => {
        if(err) return res.send(err);
        else{
            res.render("user-filled-form", {
                id: data.id,
                name: data.name,
                emai: data.email,
                mobile: data.mobile
            });
        }
    });
});
router.put("/", (req,res) => {
    Profile.findOneAndUpdate({_id:req.body.id}, req.body, {new: true}, (err, data) => {
        if(error) res.send(err);
        else{
            res.send(data);
        }
    });
});

router.delete("/", (req,res) => {
    Profile.findOneAndRemove({_id:req.body.id}, (err, data) => {
        if(error) res.send(err);
        else{
            res.send({
                message:"deleted"
            });
        }
    });
});

module.exports = router;
