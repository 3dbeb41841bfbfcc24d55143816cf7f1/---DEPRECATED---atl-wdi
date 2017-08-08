const express = require('express');
const router = express.Router();

const debitsData = require('../data/debits');

router.get('/', (request, response) => {
    response.send(debitsData);
})

module.exports = router;