var controller = require('../controllers/integrantes.controller');
var express = require('express')
let api = express.Router()

api.get('/getAll', controller.getIntegrantes);
api.post('/get', controller.getIntegrante);

module.exports = api;