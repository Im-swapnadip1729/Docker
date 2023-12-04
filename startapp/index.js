const mongoose = require("mongoose");
const express = require("express");

const DATABASE = "mongodb://mymongo:27017/testapp";
const app = express();

mongoose.connect(DATABASE)
    .then(() => {
        console.log("DB is Connected!!");
    })
    .catch(() => {
        console.log("ERROR: DB Connection Failled!!! ");
    });

app.get("/", (req,res) => {
    res.json({
        message: "You are visiting ROOT node"
    });
});

app.listen(8000,() => {
    console.log("8000 is ready to serve...");
});