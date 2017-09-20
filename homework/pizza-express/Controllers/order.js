const express = require("express")
const router = express.Router()

router.get("/:amount/:size", (req, res) => {
    
    const amount = req.params.amount
    const size = req.params.size
    res.render("order", {
        amount: amount,
        size: size
    })
})

module.exports = router