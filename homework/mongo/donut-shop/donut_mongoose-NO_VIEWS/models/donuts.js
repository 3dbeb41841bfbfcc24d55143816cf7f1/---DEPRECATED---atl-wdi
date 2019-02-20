//requirements: require mongoose
var mongoose = require('mongoose')

//create your donut schema:
var donutSchema = new Schema ({
        name: string,
        description: string,
        img: string,
        price: number,
        qty: number,
});

//export your donut with module.exports()
 module.exports.donutSchema = donutSchema;
 