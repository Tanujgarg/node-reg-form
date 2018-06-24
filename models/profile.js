const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    mobile: {
        type: String
    },
    created_on: {
        type: Date,
        default: Date.now
    }
});

const Profile = mongoose.model("Profile", profileSchema);

exports.Profile = Profile;
exports.profileSchema = profileSchema;