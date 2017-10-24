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

router.delete('/:id', function(req, res) {
    pirates.allThePirates.splice(req.params.id, 1); // remove the item from the array
  
    res.redirect('/pirates');  // redirect back to the index route
});

router.get("/:id", function(req, res) {
    const id = parseInt(req.params.id)
    const pirateNum = pirates.allThePirates[id]
    res.render("pirates/show", {
        pirateNum

    })
})

router.put('/:id', function(req, res) {
    var pirateToEdit = pirates.allThePirates[req.params.id];
  
    pirateToEdit.name = req.body.name;
    pirateToEdit.birthplace = req.body.birthplace;
    pirateToEdit.death_year = req.body.death_year;
    pirateToEdit.base = req.body.base;
    pirateToEdit.nickname = req.body.nickname;
    
    res.redirect('/pirates');
})

router.post("/", function(req, res) {
    const newPirate = req.body
    pirates.allThePirates.push(newPirate)
    res.redirect("/pirates")
})

router.get('/:id/edit', function(req, res){
    res.render('pirates/edit', {
      pirate: {
        id: req.params.id,
        name: pirates.allThePirates[req.params.id].name,
        birthplace: pirates.allThePirates[req.params.id].birthplace,
        death_year: pirates.allThePirates[req.params.id].death_year,
        base: pirates.allThePirates[req.params.id].base,
        nickname: pirates.allThePirates[req.params.id].nickname
      }
    });
});

module.exports = router