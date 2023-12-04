// calling
const express = require("express");
const app = express();


// routing
app.get("/", (req,res) => {
    // res.send("<h1>Visiting Root</h1>");
    res.json({
        message: "You are visiting root"
    });
});

app.get("/login", (req,res) => {
    // res.send("<h1>Visiting Root</h1>");
    res.json({
        message: "You are visiting login route"
    });
});

app.get("/singup", (req,res) => {
    // res.send("<h1>Visiting Root</h1>");
    res.json({
        message: "You are visiting singup route"
    });
});

// listening
app.listen(8000, () => {
    console.log("App is running at 8000");
});