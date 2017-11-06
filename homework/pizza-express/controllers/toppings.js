const express = require('express');
const router = express.Router();

app.get('/topping/:type', (req, res, next) => {
    res.send("pepperoni pizza. Good choice I guess")
})