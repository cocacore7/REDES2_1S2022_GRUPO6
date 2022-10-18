var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var administradorSchema = Schema({
    IdAdministrador: String,
    Nombre: String,
    Apellido: String,
    FechaNac: String
})

module.exports = mongoose.model('administrador', administradorSchema)