var express = require('express');
var app = express();
var hbs = require('hbs')


const indexController = require('./controllers/index.js')
const toppingController = require('./controllers/topping.js')
const orderController = require('./controllers/order.js')


app.use(express.static(__dirname + '/public'))

app.set("view engine", "hbs");
app.set('views', './views');

app.get('/', (req, res) => {
    res.send("Hello this is the home page")
});
app.get('/topping/:type', (req, res, next) => {
    res.send(" ${type} pizza. Good choice, I guess.")
})
app.get('/order/:amount/:size', (req, res, next) =>{
    res.send("Your order for ${amount} ${size} pizzas will be ready in 1 minute!")
})

const PORT = 3000;
app.listen(PORT, function () {
    console.log('*****************')
    console.log('listening on 3000')
    console.log('*****************')
})
