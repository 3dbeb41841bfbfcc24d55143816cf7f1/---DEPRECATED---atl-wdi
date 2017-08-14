const express = require('express');
const router = express.Router();

const creditsData = require('../data/credits');

router.get('/', (request, response) => {
    response.send(creditsData);
});

module.exports = router;