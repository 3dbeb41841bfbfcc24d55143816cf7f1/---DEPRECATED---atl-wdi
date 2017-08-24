/* packages */
const path        = require('path');
const logger      = require('morgan');
const express     = require('express');
const hbs         = require('hbs');
const bodyParser = require('body-parser');
/* app settings*/
const app         = express();
const port        = process.env.PORT || 3000;
/* set up the application params*/
const TodosController = require('./controller/todos');


// log
app.use( logger('dev'));
app.use(bodyParser.urlencoded({
  extended: true
}));

/*Views*/
app.set('view engine', 'hbs');

/* HOME */
app.get('/', function(req,res) {
  res.send('This is our Home Page');
});
app.use('/todos', TodosController);



// /* INDEX TODOS */
// app.get('/todos', function(req,res) {
//   var seededTodos = [
//     {
//       description: "get beer",
//       urgent: true
//     }, {
//       description: "dry cleaning",
//       urgent: false
//     }
//   ];

//   res.render('todos/index', {
//     todos: seededTodos
//   });
// });

// Start server
app.listen(port, function() {
  console.info('Server Up -- Ready to serve hot todos on port', port,"//", new Date());
});
