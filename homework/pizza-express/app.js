var express = require('express');
var app = express();
var port = 3000;



app.listen(port, () => {
    console.log("=================================")
    console.log(`LISTENING ON PORT ${port}`);
    console.log("=================================")
});