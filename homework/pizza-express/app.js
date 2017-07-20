var express = require('express');
var app = express();
var port = 3000;

app.get('/', (req, res) => {
    res.send(`Welcome to Pizza Express!`);
})

app.get('/topping/:topping', (req, res) => {
    var topping = req.params.topping;
    res.send(`${topping} pizza! Good choice!`);
})

app.get('/order/:number/:size', (req, res, next) => {
    var number = req.params.number;
    var size = req.params.size;
    res.send(`Your order for ${number} ${size} pizzas will be ready in 1 minute!`);
})

app.listen(port, () => {
    console.log("=================================")
    console.log(`LISTENING ON PORT ${port}`);
    console.log("=================================")
});