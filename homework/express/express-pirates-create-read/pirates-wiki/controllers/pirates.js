var express = require("express");
var router = express.Router();
var pirates = require('../models/pirates.js');

router.get('/', function(req, res) {
    res.render('pirates/index', {
        pirates: pirates.allThePirates
    })
})

router.get("/new", function(req, res) {
    res.render("pirates/new")
})

router.get("/:id", function(req, res) {
    const id = parseInt(req.params.id)
    const pirateNum = pirates.allThePirates[id]
    res.render("pirates/show", {
        pirateNum

    })
})

router.post("/", function(req, res) {
    const newPirate = req.body
    pirates.allThePirates.push(newPirate)
    res.redirect("/pirates")
})

module.exports = router