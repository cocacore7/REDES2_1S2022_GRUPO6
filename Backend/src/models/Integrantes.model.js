var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var IntegranteSchema = Schema({
    Carne: String,
    Nombre: String,
    Apellido: String,
    FechaNac: String
})

module.exports = mongoose.model('integrante', IntegranteSchema)