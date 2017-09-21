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
    const id = parseInt(req.params.id)
    const pirate = data.seededPirates[id];
    console.log(pirates);
    if (!pirate) {
        res.render('pirates/show', {
            error: "no pirates found here"
        })
    } else {
        res.render('pirates/show', {pirates})
    }
}
);

// POST
router.post('/', (req, res) => {
    console.log(req.body);
    const newPirate = req.body;
    pirates.push(newPirate);
    res.redirect('/pirates');
});


module.exports = router;