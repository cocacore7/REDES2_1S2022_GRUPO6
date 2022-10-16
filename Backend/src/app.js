const bodParser = require('body-parser')
const express = require('express');
const morgan = require('morgan');
//const cors = require('cors');
const app = express();

//Imported routes
var route_integrantes = require('./routes/integrantes.route')

//middlewares
app.use(bodParser.urlencoded({limit:'50mb', extended:true}))
app.use(bodParser.json({limit:'50mb', extended:true}))
app.use(morgan('dev'));


//routes
app.get('/', (req, res) => {
    res.send('Hola mundo uwuwu');
})

app.use('/Integrante', route_integrantes)

module.exports = app;