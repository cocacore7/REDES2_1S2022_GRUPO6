const bodParser = require('body-parser')
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();

//Imported routes
var route_administradores = require('./routes/administrador.route')
var route_estadisticas = require('./routes/estadistica.route')
var route_integrantes = require('./routes/integrante.route')
var route_photos = require('./routes/photo.route')

//middlewares
app.use(bodParser.urlencoded({limit:'50mb', extended:true}))
app.use(bodParser.json({limit:'50mb', extended:true}))
app.use(morgan('dev'));
app.use(cors());


//routes
app.get('/', (req, res) => {
    res.send('Hola mundo uwuwu');
})

app.use('/Adiministrador', route_administradores)
app.use('/Estadistica', route_estadisticas)
app.use('/Integrante', route_integrantes)
app.use('/Photo', route_photos)



module.exports = app;