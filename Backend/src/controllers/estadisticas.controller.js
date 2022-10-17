var EstadisticaSchema = require('../models/estadisticas.model')

async function getIntegrantes(req, res){
    EstadisticaSchema.find((err, estadisticas) => {
        if(err){
            return res.status(404).send()
        }

        return res.status(200).send({ estadisticas })
    })
}

async function getIntegrante(req, res){
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
    getIntegrantes,
    getIntegrante
}