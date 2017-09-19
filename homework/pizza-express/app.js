var express = require('express');
//save an express module as 'app'
var app     = express();
// assigning 3000 as our port
app.get("/", (req, res) => {
    res.send("Welcome to Pizza Express")
})

app.get("/topping/:type", (req, res, next) => {
    const type = req.params.type;
    res.send(`${type} pizza! Good choice.`)
})

app.get("/order/:amount/:size", (req, res, next) => {
    const amount = req.params.amount
    const size = req.params.size
    res.send(`Your order for ${amount} ${size} pizzas will be ready in 1 minute`)
})
var port = 3000;

// tells the server to listen for requests on port 3000
app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});