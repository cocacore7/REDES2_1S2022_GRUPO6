var controller = require('../controllers/photo.controller');
var express = require('express')
let api = express.Router()

api.get('/getAll', controller.getPhotos);
api.post('/get', controller.getPhoto);

module.exports = api;