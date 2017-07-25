var express = require('express');
var router = express.Router();

var User = require("../models/user");
var Item = require("../models/item");

// USERS INDEX ROUTE

router.get('/', (req, res) => {
    
    console.log("Root is working");
    res.send("Root is working");

})

// USER SHOW ROUTE

// USER CREATE ROUTE

// USER UPDATE ROUTE

// USER DESTROY

// ADD A NEW ITEM

// REMOVE AN ITEM

module.exports = router;
