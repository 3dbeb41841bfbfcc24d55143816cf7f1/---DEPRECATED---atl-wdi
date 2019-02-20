const express = require("express");
const router = express.Router();
const data = require("../data.js");

/* INDEX TODOS */
router.get('/', (req,res) => {
  console.log(data);
  res.render('todos/index', {
    todos: data.seededTodos
  });
});

/* NEW TODOS */
router.get('/new', (req, res) => {
  res.render('todos/new');
})

/* SHOW TODOS */
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = data.seededTodos[id];
  console.log(todo);
  if (!todo){
    res.render('todos/show', {
      error: "No to-do found with this ID"
    })
  } else {
    res.render('todos/show', {todo})
  }
});

//edit todos
router.get('/:id/edit', (req, res) => {
    res.render('todos/edit', {
      todo: {
        id: req.params.id,
        description: data.seededTodos[req.params.id].description,
        urgent: data.seededTodos[req.params.id].urgent,
      }
    });
  });

  //update todos
  router.put('/:id', (req, res) => {
    var todoToEdit = data.seededTodos[req.params.id];
  
    todoToEdit.description = req.body.description;
    todoToEdit.urgent = req.body.urgent;
  
    res.redirect('/todos');
  })

  //delete the todos
router.delete('/:id', (req, res) => {
    data.seededTodos.splice(req.params.id, 1); // remove the item from the array

    res.redirect('/todos');  // redirect back to the index route
});



router.post('/', (req, res) => {
  console.log(req.body);
  const newTodo = req.body;
  data.seededTodos.push(newTodo);
  res.redirect('/todos');
});

module.exports = router;