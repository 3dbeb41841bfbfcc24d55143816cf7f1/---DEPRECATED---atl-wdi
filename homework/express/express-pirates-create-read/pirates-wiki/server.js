//your code here
const express = require('express')
const hbs = require("hbs")

var app = express()
var port = 3000
app.set("view engine", "hbs")

var pirateController = require('./controllers/pirates.js');
app.use("/pirates", pirateController);
// app.get('/', function(req, res) {
//     res.send("homepage")
// })

app.listen(port, function() {
    console.info('server up on', port)
})