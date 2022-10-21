import React,{useEffect, useState} from 'react'
import axios from "axios";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Devs.css'

export default function Developers() {
  const [datos, setDatos]=useState([]);
  useEffect(() => {
    async function obtener() {
        let data = await axios.get("http://localhost:4000/Integrante/getAll")
        if (data === null || data === undefined){
            alert("no existen administradores")
        }else{
          let newDevs = []
          data.data.integrante.forEach(item => {
            let contador = 1
            let newDev = {
              "id":contador,
              "Nombre": item.Nombre,
              "Apellido": item.Apellido,
              "FechaNac": item.FechaNac,
              "Carne": item.Carne,
              "Curso": item.Curso,
              "Foto": item.Foto
            }
            newDevs.push(newDev)
            contador++
          });
          setDatos(newDevs)
        }
    }
    obtener();
  },[]);
  
  return (
    <div><h1 className='Title'>Desarrolladores </h1>
      <div className='carta'>
        <Row xs={1} md={2} className="g-5">
        {Array.from(datos).map((value, idx) => (
          <Col>
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <img class="w-full" src={value.Foto} alt="Sunset in the mountains"/>
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{value.Nombre + value.Apellido}</div>
                <p class="text-gray-700 text-base">{value.Carne} </p>
                <p class="text-gray-700 text-base">{value.FechaNac} </p>
              </div>
              <div class="px-6 pt-2 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{value.Curso}</span>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      </div>
    </div>
  )
}
