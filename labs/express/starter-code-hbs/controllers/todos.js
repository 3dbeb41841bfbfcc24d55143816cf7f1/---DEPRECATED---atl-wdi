const express = require("express")
const router = express.Router()
const data = require("../data.js")

router.get('/', function(req,res) {

    res.render('todos/index', {
      todos: data.seededTodos
    });
});

router.get("/new", (req, res) => {
    res.render("todos/new")
})

router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const todo = data.seededTodos[id]
    if (!todo) {
        res.render("todos/show", {
            error: "No todo found with this ID"
        })
    } else {
        res.render("todos/show", {
            todo
        })
    }
})

router.post("/", (req, res) => {
    const newTodo = req.body
    data.seededTodos.push(newTodo)
    res.redirect('/todos')
})
module.exports = router