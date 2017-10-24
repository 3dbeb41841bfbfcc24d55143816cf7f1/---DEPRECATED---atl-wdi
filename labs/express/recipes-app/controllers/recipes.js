const express = require("express");
const router = express.Router();
const recipes = require('../seededRecipes.js');

router.get('/', (req, res) => {

  res.render('/recipes', {
    recipes: seededRecipes
  });
});

  
module.exports = router