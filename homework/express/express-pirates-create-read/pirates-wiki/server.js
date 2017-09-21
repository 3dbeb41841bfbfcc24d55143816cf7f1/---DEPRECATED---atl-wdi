//packages
const express = require("express");
const hbs = require("hbs");
const bodyParser = require('body-parser');

//app settings
const app = express();
const PORT = process.env.PORT || 3002;
const piratesController = require("./controllers/pirates.js")

//log

app.use(bodyParser.urlencoded({extended: true}));
//views
app.set('view engine', 'hbs');


app.use("/pirates", piratesController)


//home
app.get('/', (req, res) => {
    res.send('this is the home page ')
})



//start server
app.listen(PORT, () => {
    console.info('listening to 3002')
})