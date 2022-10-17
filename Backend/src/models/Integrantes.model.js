var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var InegranteSchema = Schema({
    Carne: Number,
    Nombre: String,
    Apellido: String,
    FechaNac: String
})

module.exports = mongoose.model('integrante', InegranteSchema)