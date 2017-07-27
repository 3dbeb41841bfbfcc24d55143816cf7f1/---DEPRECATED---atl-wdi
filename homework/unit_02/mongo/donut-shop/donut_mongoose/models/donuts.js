//requirements: require mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;
//create your donut schema:
var donutSchema = new Schema({
    name: String,
    descriptio: String,
    img: String,
    price: Number,
    qty: Number
})

//export your donut with module.exports()

var DonutModel = mongoose.model("Donut", donutSchema);

module.exports = {
    Donut: DonutModel
}