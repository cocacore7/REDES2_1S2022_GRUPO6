async function addIntegrante(req, res){
    const {Carne,Nombres, Apellidos, FechaNac}  = req.body
    if (!Carne || !Nombres || !Apellidos || !FechaNac){
        return res.status(400).send({Resultado: 'Hace falta uno o mas parametros'})
    }

    const params = [Carne,Nombres,Apellidos,FechaNac]
    //const respuesta = await conexion.execute_sp('AgregarAmigo',params)
    //return res.status(200).send(respuesta.result[0][0])  
    return res.status(200).send({Resultado: params})    
}

async function getIntegrantes(req, res){
    const {Carne,Nombres, Apellidos, FechaNac}  = req.body
    if (Carne || Nombres || Apellidos || FechaNac){
        return res.status(400).send({Resultado: 'Hace falta uno o mas parametros'})
    }

    const params = [Carne,Nombres,Apellidos,FechaNac]
    //const respuesta = await conexion.execute_sp('AgregarAmigo',params)
    //return res.status(200).send(respuesta.result[0][0])  
    return res.status(200).send({Resultado: params})    
}

async function getIntegrante(req, res){
    const {Carne}  = req.body
    if (!Carne){
        return res.status(400).send({Resultado: 'Hace falta uno o mas parametros'})
    }

    const params = [Carne]
    //const respuesta = await conexion.execute_sp('AgregarAmigo',params)
    //return res.status(200).send(respuesta.result[0][0])  
    return res.status(200).send({Resultado: params})    
}

module.exports = {
    addIntegrante,
    getIntegrantes,
    getIntegrante
}