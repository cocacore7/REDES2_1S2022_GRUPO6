var InegranteSchema = require('../models/Integrantes.model')

async function getIntegrantes(req, res){
    InegranteSchema.find((err, integrantes) => {
        if(err){
            return res.status(404).send()
        }

        return res.status(200).send({ integrantes })
    })
}

async function getIntegrante(req, res){
    const {Carne}  = req.body
    if (!Carne){
        return res.status(400).send({Resultado: 'Hace falta uno o mas parametros'})
    }

    InegranteSchema.findById(Carne, (err, integrante) => {
        if(err){
            return res.status(404).send()
        }

        return res.status(200).send({ integrante })
    }) 
}

module.exports = {
    getIntegrantes,
    getIntegrante
}