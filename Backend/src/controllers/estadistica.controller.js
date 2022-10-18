var EstadisticaSchema = require('../models/estadistica.model')

async function getEstadisticas(req, res){
    EstadisticaSchema.find((err, estadistica) => {
        if(err){
            return res.status(404).send()
        }

        return res.status(200).send({ estadistica })
    })
}

async function getEstadistica(req, res){
    const {Carne}  = req.body
    if (!Carne){
        return res.status(400).send({Resultado: 'Hace falta uno o mas parametros'})
    }

    EstadisticaSchema.findById(Carne, (err, estadistica) => {
        if(err){
            return res.status(404).send()
        }

        return res.status(200).send({ estadistica })
    }) 
}

module.exports = {
    getEstadisticas,
    getEstadistica
}