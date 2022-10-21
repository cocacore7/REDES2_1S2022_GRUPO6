import React,{useEffect, useState} from 'react'
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,BarChart,Bar } from 'recharts';
import './FunPublica.css'

export default function DesaEconomico() {
  const [datos, setDatos]=useState([]);
  useEffect(() => {
    async function obtener() {
        let data = await axios.get("http://localhost:4000/Estadistica/getAll")
        if (data === null || data === undefined){
          alert("no existen administradores")
          setDatos(data)
        }else{
          setDatos(data.data.estadistica)
        }
    }
    obtener();
  },[]);
  return (
    <div><h1 className='Title'>Desarrollo Economico</h1>
    
    <h3 className='Title'>UcronCoin vs otras monedas</h3>
    <div className='Graficas'>
      <LineChart
        width={900}
        height={300}
        data={datos}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Dolar" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="UcronCoin" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Euro" stroke="red" />
      </LineChart>
    </div>
    <h3 className='Title'>UcronCoin a traves del tiempo</h3>
    <div className='Graficas'>
      <BarChart width={900} height={300} data={datos}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="UcronCoin" fill="#8884d8" />
      </BarChart>
    </div>
    </div>
  )
}
