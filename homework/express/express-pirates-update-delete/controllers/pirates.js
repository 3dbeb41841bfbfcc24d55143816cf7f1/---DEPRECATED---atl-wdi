//==============================
// REQUIREMENTS
//==============================

const express = require("express");
const router = express.Router();
const pirates = require('../models/pirates.js');

//==============================
// READ
//==============================
//for root pirate page
router.get('/', function(req, res){
	res.render("pirates/index", {
		pirates: pirates
	});
});


router.get('/new', function(req, res){
	res.render("pirates/new");
});


//this is for each pirate page
router.get('/:id', function(req, res){
	const id = req.params.id;
	const showPirate = pirates[id];

	res.render("pirates/show", {
		id: id,
		pirate: showPirate
	});
});

// router.get('/:id/edit', (req, res) => {
// 	const id = req.params.id;
// 	const showPirate = pirates[id];
// 	res.render('pirates/edit', {
// 		id: id,
// 		pirate: showPirate
// 	})
// })


//==============================
// CREATE
//==============================
router.post('/', (req, res) => {
	console.log(req.body);
	
	const newPirate = {
		name: req.body.name,
	  	birthplace: req.body.birthplace,
	  	death_year: req.body.death_year,
    	base: req.body.base,
    	nickname: req.body.nickname
	};
	pirates.push(newPirate);
	res.redirect('/pirates');
})
//==============================
// UPDATE
//==============================
router.get('/:id/edit', (req, res) => {
	const id = req.params.id;
	const showPirate = pirates[id];
	res.render('pirates/edit', {
		pirate: showPirate,
		id: id
	})
})

router.put('/:id', (req, res) => {
	const id = req.params.id;
	const pirate = pirates[id];
	pirates.name = req.body.name;
	pirates.birthplace = req.body.birthplace;
	pirates.death_year = req.body.death_year;
	pirates.base = req.body.base;
	pirates.nickname = req.body.nickname;

	res.method = "GET";
	res.redirect(`/pirates/${id}`);
})
//==============================
// DESTROY
//==============================
router.delete('/:id', (req, res) => {
	pirates.splice(req.params.id, 1);
	res.method = 'GET';
	res.redirect('/pirates');
})
//==============================
// EXPORTS
//==============================

module.exports = router;
