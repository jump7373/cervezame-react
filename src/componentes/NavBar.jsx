import React from "react";
import CartWidget from './CartWidget';
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Components.css"


export default function NavBar() {

  
  return (
    <>
      <Navbar bg="secondary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand><Link to="/"><img src="https://raw.githubusercontent.com/jump7373/proyecto-final-mirabile/master/img/logo-cervezame.png" style={{ width: "7rem" }} alt="" /></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><Link to="/" className="links">Inicio</Link></Nav.Link>
              <NavDropdown title="Categorías" id="basic-nav-dropdown">
                <NavDropdown.Item><Link to="/category/Ortuzar" className="links">Cervezas Ortuzar</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="/category/Baba" className="links">Cervezas Baba</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="/category/Alemania" className="links">Cervezas de Alemania</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="/category/Argentina" className="links">Cervezas de Argentina</Link></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              <CartWidget />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  )
}