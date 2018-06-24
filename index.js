const express = require("express");
const profile = require("./routes/profiles");
const bodyParser = require("body-parser");
const app = express();
app.set('view engine', 'pug');
app.set('views','./views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", profile);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});