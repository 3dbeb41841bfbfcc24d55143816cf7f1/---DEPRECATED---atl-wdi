const express = require("express");
const router = express.Router();
const data = require("../data.js");

/* INDEX TODOS */
router.get('/', (req, res) => {

    res.render('todos/index', {
        todos: data.seededTodos
    });
});

/* new todos */
router.get('/new', (res, req) => {
    res.render('todos/new');
})

/* show todos  */
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const todo = data.seededTodos[id];
    console.log(todo);
    if (!todo) {
        res.render('todos/show', {
            error: " no to-do found with this id"
        })
    } else {
        res.render('todos/show', { todo })
    }
    res.render('todos/show', {
        todo: todo
    })

    router.post('/', (req, res) => {
        console.log(req.body);
        const newTodo = req.body;
        data.seededTodos.push(newTodo);
        res.redirect('/todos')
    })
});


module.exports = router;
