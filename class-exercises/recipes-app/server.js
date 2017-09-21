const express = require('express');
const hbs = require('hbs');
const PORT = 3001;
const recipesController = require('./controllers/recipes');

const app = express();

app.set('view engine', 'hbs');

app.use("/recipes", recipesController);

app.get('/', (req, res) => {
    res.send('home page');
})
app.get('/recipes', (req, res) => {
    res.render('recipes/index', {
        recipes:data.seededRecipes
    })

})

app.listen(PORT, () => {
    console.log("listening on 3001")
})

