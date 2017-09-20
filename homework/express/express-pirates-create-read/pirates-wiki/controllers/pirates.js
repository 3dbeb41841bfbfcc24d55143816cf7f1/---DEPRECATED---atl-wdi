var express = require("express");
var router = express.Router();
var pirates = require('../models/pirates.js');

router.get('/', function(req, res) {
    res.render('pirates/index', {
        pirates: pirates.allThePirates
    })
})

router.get("/:id", function(req, res) {
    const id = parseInt(req.params.id)
    const pirateNum = pirates.allThePirates[id]
    res.render("pirates/show", {
        pirateNum

    })
})


module.exports = router