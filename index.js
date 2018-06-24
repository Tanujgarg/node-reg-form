const express = require("express");
const profile = require("./routes/profiles");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost/registration")
//     .then(() => console.log("DB connected"))   
//     .catch(err => console.log("Error", err));

app.set('view engine', 'pug');
app.set('views','./views');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", profile);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});