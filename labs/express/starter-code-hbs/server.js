/* packages */
const path = require('path');
const logger = require('morgan');
const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser')
/* app settings*/
const app = express();
const port = process.env.PORT || 3000;
const todosController = require('./controllers/todos');

/* set up the application params*/

// log
app.use(logger('dev'));

app.use(bodyParser.urlencoded({extended: true}));

/*Views*/
app.set('view engine', 'hbs');

/* controllers*/
app.use("/todos", todosController);

/* HOME */
app.get('/', (req, res) => {
  res.send('This is our Home Page');
});

// Start server
app.listen(port, () => {
  console.info('Server Up -- Ready to serve hot todos on port', port, "//", new Date());
});
