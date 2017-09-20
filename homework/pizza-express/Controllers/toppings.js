const express = require("express")
const router = express.Router()

router.get('/:type', (req, res) => {
    
    const type = req.params.type
    res.render("toppings", {
        
        type: type
    })
})

module.exports = router