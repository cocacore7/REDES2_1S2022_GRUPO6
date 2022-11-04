var IntegranteSchema = require('../models/integrante.model')

function getIntegrantes(req, res){
    IntegranteSchema.find((err, integrante) => {
        if(err) return res.status(404).send()
        return res.status(200).send({ integrante })
    })

    //return res.status(200).send({ integrantes:"Soykat" })   
}

async function getIntegrante(req, res){
    const {Carne}  = req.body
    if (!Carne){
        return res.status(400).send({Resultado: 'Hace falta uno o mas parametros'})
    }

    IntegranteSchema.findById(Carne, (err, integrante) => {
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