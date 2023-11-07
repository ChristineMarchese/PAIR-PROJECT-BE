const express = require("express");
const app = express()


// cities routes

const cityController = require("./controllers/cityController");

// import cors

const cors = require('cors');


// middleware
app.use(cors());
// app.use(express.json());
app.use("/cities", cityController);

app.get("/", (req, res) => {
    res.send('Welcome to Cities App');
});

app.get("*", (req, res) => {
    res.status(404).send({message: "city not found"})
})



module.exports = app;