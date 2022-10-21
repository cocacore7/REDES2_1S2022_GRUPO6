var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var EstadisticaSchema = Schema({
    name: Number,
    Dolar: String,
    UcronCoin: String,
    Euro: String
})

module.exports = mongoose.model('estadistica', EstadisticaSchema)