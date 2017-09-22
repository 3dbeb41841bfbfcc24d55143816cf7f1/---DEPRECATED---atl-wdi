//your code below
const express = require("express");
const router = express.Router();
const pirates = require("../models/data.js");


//index pirates
router.get('/', (req, res) => {
    res.render('pirates/index', {
        pirates:pirates
    });
});
// NEW
router.get('/new', (req, res) => {
    res.render('pirates/new')
})
// SHOW
router.get('/:id', (req, res) => {
    const id = req.params.id
    const pirate = pirates[id];
    console.log(pirates);
    if (!pirate) {
        res.render('pirates/show', {
            error: "no pirates found here"
        })
    } else {
        res.render('pirates/show', { pirate })
    }
}
);
//edit 
router.get('/:id/edit', (req, res) => {
    res.render('pirates/edit', {
        pirate: {
            id: req.params.id,
            name: pirates[req.params.id].name,
            birthplace: pirates[req.params.id].birthplace,
            death_year: pirates[req.params.id].death_year,
            base: pirates[req.params.id].base,
            nickname: pirates[req.params.id].nickname,
        }
    })
});

//update 
router.put('/:id', (req, res) => {
    const pirateEdit = pirates[req.params.id];

    pirateEdit.name = req.body.name;
    pirateEdit.birthplace = req.body.birthplace;
    pirateEdit.death_year = req.body.death_year;
    pirateEdit.base = req.body.base;
    pirateEdit.nickname = req.body.nickname;

    res.redirect('/pirates');
})


//delete
router.delete('/:id', (req, res) => {
    pirates.splice(req.params.id, 1);

    res.redirect('/pirates');
});


// POST
router.post('/', (req, res) => {
    console.log(req.body);
    const newPirate = req.body;
    pirates.push(newPirate);
    res.redirect('/pirates');
});


module.exports = router;