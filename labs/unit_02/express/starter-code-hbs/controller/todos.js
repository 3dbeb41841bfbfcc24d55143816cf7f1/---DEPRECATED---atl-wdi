const express = require('express');
const router = express.Router();
const data = require('../data');

/* INDEX TODOS */
router.get('/', (req,res) => {
  res.render('todos/index', {
    todos: data.seededTodos,
  });
});

router.get('/new', (req, res) => {
  res.render('todos/new');
})

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const todo = data.seededTodos[id];
  res.render('todos/show', {
    todo: todo
  });
})

router.post('/', (req, res) => {
  res.send('You made a post!');
})


module.exports = router;