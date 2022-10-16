import React, { useState } from "react";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Developers from './Developers';
import Administrador from './Administrador';
import Home from "./Home";
import FunPublica from "./FunPublica";
import DesaEconomico from "./DesaEconomico";
export default function Navbar_() {
  
  const [componente, setComponente] = useState(1);
  
  const onSelect = (e) => {
    setComponente(e);
  };

  const ReturnComponente = () => {
    if(componente === "2"){
      return <Administrador/>
    } else if (componente === "3"){
      return <Developers/>
    }else if (componente === "4"){
      return <FunPublica/>
    }else if (componente === "5"){
      return <DesaEconomico/>
    }

    return <Home/>
  };


  return (
    <div>

  <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">{' '}
            UCRON
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav  className="me-auto" onSelect={onSelect} >
      <Nav.Item>
        <Nav.Link eventKey="1" >Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2" >Administradores</Nav.Link>
      </Nav.Item>

      <Nav.Item>
          <Nav.Link eventKey="3" >Desarrolladores</Nav.Link>      
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="4">Función_Publica</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="5" >Desarrollo_Economico</Nav.Link>
      </Nav.Item>
  </Nav>
  </Navbar.Collapse>
      </Navbar>
  <ReturnComponente/>
  </div>
  )
}