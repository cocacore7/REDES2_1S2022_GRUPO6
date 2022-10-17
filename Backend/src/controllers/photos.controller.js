var PhotoSchema = require('../models/photos.model')

async function getPhotos(req, res){
    PhotoSchema.find((err, photos) => {
        if(err){
            return res.status(404).send()
        }

        return res.status(200).send({ photos })
    })
}

async function getPhoto(req, res){
    const {Nombre}  = req.body
    if (!Nombre){
        return res.status(400).send({Resultado: 'Hace falta uno o mas parametros'})
    }

    PhotoSchema.findById(Nombre, (err, photo) => {
        if(err){
            return res.status(404).send()
        }

        return res.status(200).send({ photo })
    }) 
}

module.exports = {
    getPhotos,
    getPhoto
}