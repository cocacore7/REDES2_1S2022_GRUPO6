var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var EstadisticaSchema = Schema({
    Carne: Number,
    Nombre: String,
    Apellido: String,
    FechaNac: String
})

module.exports = mongoose.model('estadistica', EstadisticaSchema)