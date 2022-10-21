import React,{useEffect, useState} from 'react'
import axios from "axios";
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'

export default function Home() {
  const [datos, setDatos]=useState([]);
  useEffect(() => {
    async function obtener() {
        let data = await axios.get("http://localhost:4000/Photo/getAll")
        if (data === null || data === undefined){
            alert("no existen administradores")
        }else{
          setDatos(data.data.photo)
        }
    }
    obtener();
  },[]);

  return (
    <div >
      <h1 className='Title'>Home</h1>
      <div className='Carusel'>
        <Carousel>
        {Array.from(datos).map((value, idx) => (
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={value.Link}
              alt="First slide"
            />
          </Carousel.Item>
        ))}
      </Carousel>
      </div>
    </div>
  )
}
