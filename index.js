var http= require('http');
var express = require("express");
const fs = require('fs');
PORT = 300;

var app = express();
app.listen(process.env.PORT, () => {
 console.log("Server running on port " + PORT);
});

app.use(express.static('www'));

app.get("/", (req, res, next) => {
 res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});
