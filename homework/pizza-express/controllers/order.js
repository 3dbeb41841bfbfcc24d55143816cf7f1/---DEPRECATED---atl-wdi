const express = require('express');
const router = express.Router();

app.get('/order/:amount/:size', (req, res, next) => {
    res.send("your order for " + " " + " " +"will be ready in 1 minute" )
})
    