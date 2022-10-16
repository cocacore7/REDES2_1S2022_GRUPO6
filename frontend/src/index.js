import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Administrador from './components/Administrador'; 
import DesaEconomico from './components/DesaEconomico'; 
import Developers from './components/Developers'; 
import FunPublica from './components/FunPublica'; 
import Navbar from './components/Navbar';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>

    <Route path="" element={<Navbar />} />
    <Route path="/Adm" element={<Administrador />} />
    <Route path="/Devs" element={<Developers />} />
    <Route path="/DevEcono" element={<DesaEconomico />} />
    <Route path="/FunPublica" element={<FunPublica />} />
    </Routes>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
