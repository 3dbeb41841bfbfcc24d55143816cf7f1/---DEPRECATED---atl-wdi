//requirements: require mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;
//create your donut schema:
var DonutSchema = new Schema({
    name: String,
    descriptio: String,
    img: String,
    price: Number,
    qty: Number
})

//export your donut with module.exports()

var Donut = mongoose.model("Donut", DonutSchema);

module.exports = Donut