var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var administradorSchema = Schema({
    Nombre: String,
    Apellido: String,
    Puesto: String,
    Foto: String
})

module.exports = mongoose.model('administrador', administradorSchema)