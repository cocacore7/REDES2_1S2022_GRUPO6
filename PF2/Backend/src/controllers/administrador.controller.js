var AdministradorSchema = require('../models/administrador.model')

async function getAdministradores(req, res){
    AdministradorSchema.find((err, administrador) => {
        if(err){
            return res.status(404).send()
        }

        return res.status(200).send({ administrador })
    })
}

async function getAdministrador(req, res){
    const {IdAdministrador}  = req.body
    if (!IdAdministrador){
        return res.status(400).send({Resultado: 'Hace falta uno o mas parametros'})
    }

    AdministradorSchema.findById(IdAdministrador, (err, administrador) => {
        if(err){
            return res.status(404).send()
        }

        return res.status(200).send({ administrador })
    }) 
}

module.exports = {
    getAdministradores,
    getAdministrador
}