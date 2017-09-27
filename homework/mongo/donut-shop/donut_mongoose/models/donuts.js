//requirements: require mongoose
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

mongoose.Promise=global.Promise;
//create your donut schema:
const DonutSchema = new Schema({
name: String,
description: String,
img: String,
price: Number,
qty: Number

})

const DonutModel = mongoose.model('Donut', DonutSchema)
//export your donut with module.exports()
module.exports = {
DonutModel:DonutModel
}