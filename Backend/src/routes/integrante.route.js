var controller = require('../controllers/integrante.controller');
var express = require('express')
let api = express.Router()

api.get('/getAll', controller.getIntegrantes);
api.post('/get', controller.getIntegrante);

module.exports = api;