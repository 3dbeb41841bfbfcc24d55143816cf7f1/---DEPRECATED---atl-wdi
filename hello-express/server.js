const express = require('express');
const app = express();

app.get('/', (request, response) => {
    response.send("yoooo")
});
 app.get('/greeting', (request, response) => {
  response.send("hello wdi12");
});

app.get('/rihanna', (request, response) => {
response.send("rihanna");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Express is listening on port ", PORT);
});