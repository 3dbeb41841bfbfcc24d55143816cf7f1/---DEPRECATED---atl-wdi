const express = require('express');
const app = express();
const hbs = require('hbs');

app.set("view engine", "hbs");
app.use(express.static(__dirname + '/public'));



app.get('/shows', (req, res) => {
const favShows = ['Insecure', 'The Cleveland Show', 'GoT', 'Power', 'Eastbound & Down']

res.render('favShows', {
favShows: favShows
})
});


const PORT = 3001;
app.listen(PORT, () => {
    console.log("app is listening on 3001")
});