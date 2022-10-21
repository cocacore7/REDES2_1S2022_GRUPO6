import React,{useEffect, useState} from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from "axios";

export default function Administrador() {
  const [datos, setDatos]=useState([]);
  useEffect(() => {
    async function obtener() {
        let data = await axios.get("http://localhost:4000/Administrador/getAll")
        if (data === null || data === undefined){
            alert("no existen administradores")
        }else{
          setDatos(data.data.administrador)
        }
    }
    obtener();
  },[]);

  return (
    <div><h1 className='Title'>Administradores </h1>
      <div className='carta'>
        <Row xs={1} md={3} className="g-5">
        {datos.map((_, idx) => (
          <Col>
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <img class="w-full" src={_.Foto} alt="Sunset in the mountains"/>
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{_.Puesto}</div>
                <p class="text-gray-700 text-base">{_.Nombre}</p>
                <p class="text-gray-700 text-base">{_.Apellido}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      </div>
      </div>
  )
}
