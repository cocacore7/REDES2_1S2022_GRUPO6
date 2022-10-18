var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var PhotoSchema = Schema({
    Nombre: String
})

module.exports = mongoose.model('photo', PhotoSchema)