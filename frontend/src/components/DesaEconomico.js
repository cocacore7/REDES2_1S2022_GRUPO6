import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,BarChart,Bar } from 'recharts';

import './FunPublica.css'
const data = [
  {
    name: 'Page A',
    Dolar: 4000,
    UcronCoin: 2400,
    Euro: 2400,
  },
  {
    name: 'Page B',
    Dolar: 3000,
    UcronCoin: 1398,
    Euro: 2210,
  },
  {
    name: 'Page C',
    Dolar: 2000,
    UcronCoin: 9800,
    Euro: 2290,
  },
  {
    name: 'Page D',
    Dolar: 2780,
    UcronCoin: 3908,
    Euro: 2000,
  },
  {
    name: 'Page E',
    Dolar: 1890,
    UcronCoin: 4800,
    Euro: 2181,
  },
  {
    name: 'Page F',
    Dolar: 2390,
    UcronCoin: 3800,
    Euro: 2500,
  },
  {
    name: 'Page G',
    Dolar: 3490,
    UcronCoin: 4300,
    Euro: 2100,
  },
];

export default function DesaEconomico() {
  return (
    <div><h1 className='Title'>Desarrollo Economico</h1>
    
    <h3 className='Title'>UcronCoin vs otras monedas</h3>
    <div className='Graficas'>
      <LineChart
        width={900}
        height={300}
        data={data}
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
      <BarChart width={900} height={300} data={data}>
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
