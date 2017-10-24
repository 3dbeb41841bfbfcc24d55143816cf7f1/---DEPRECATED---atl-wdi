const express = require("express")
const handlebars = require("handlebars")
const app = express()
const port = 3000
const recipesController = require("./controllers/recipes.js")


app.use("/recipes", recipesController)
app.set("view engine", "handlebars")




app.listen(port, function() {
    console.info("Server running on port", port)
})