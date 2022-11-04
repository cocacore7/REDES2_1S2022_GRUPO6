var controller = require('../controllers/estadistica.controller');
var express = require('express')
let api = express.Router()

api.get('/getAll', controller.getEstadisticas);
api.post('/get', controller.getEstadistica);

module.exports = api;