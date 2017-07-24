//===========================
// REQUIREMENTS
//===========================
const path = require('path');
const logger = require("morgan");
const express = require("express");
const hbs = require('hbs');
const bodyParser = require("body-parser");
const methodOverride = require('method-override');

const app = express();
const port = process.env.PORT || 3000;





//===========================
// MIDDLEWARE
//===========================
//this is for morgan
app.use(logger("dev"));
//these are for bodyParser
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));

// app.use(bodyParser.json());
//set handlebars as view engine
app.set("view engine", "hbs");
app.set('views', './views');


app.get('/', (req, res) => {
	res.send('This is the Home Page');
})
//===========================
// CONTROLLERS
//===========================

//controllers for `/pirates` resource
var pirateController = require('./controllers/pirates.js');
app.use("/pirates", pirateController);


//===========================
// LISTENERS
//===========================
app.listen(3000, function(req, res){
	console.log("Server Up on Port 3000");
});
