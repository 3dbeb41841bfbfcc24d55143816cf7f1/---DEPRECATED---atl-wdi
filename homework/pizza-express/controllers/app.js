var express = require('express');
var app = express();
const indexController = require('./controllers/index.js')
const toppingsController = require('./controllers/topping.js')

app.use(express.static(__dirname + '/public'))



app.get('/', (req, res) => {
    res.send("Hello this is the home page")
})



const PORT = 3000;
app.listen(PORT, function () {
    console.log('*****************')
    console.log('listening on 3000')
    console.log('*****************')
})
