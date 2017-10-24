const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
    const greeting = "Welcome to Pizza Express"
    res.render("index", {})
})

module.exports = router