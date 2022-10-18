var IntegranteSchema = require('../models/Integrantes.model')

function getIntegrantes(req, res){
    IntegranteSchema.find((err, integrantes) => {
        if(err) return res.status(404).send()
        return res.status(200).send({ integrantes })
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