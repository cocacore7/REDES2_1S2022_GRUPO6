var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var PhotoSchema = Schema({
    Link: String
})

module.exports = mongoose.model('photo', PhotoSchema)