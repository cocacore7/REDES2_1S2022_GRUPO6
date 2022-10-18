var controller = require('../controllers/administrador.controller');
var express = require('express')
let api = express.Router()

api.get('/getAll', controller.getAdministradores);
api.post('/get', controller.getAdministrador);

module.exports = api;