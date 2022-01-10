import React from "react";
import {Navbar, Nav, NavDropdown, Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function NavBar (){
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="home">Inicio</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
        
        <NavDropdown title="Cervezas" id="collasible-nav-dropdown">            
            <NavDropdown.Item href="lager">Lager</NavDropdown.Item>
            <NavDropdown.Item href="ipa">IPA</NavDropdown.Item>
            <NavDropdown.Item href="pilsen">Pilsen</NavDropdown.Item>
            <NavDropdown.Item href="rojas">Rojas</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="todas">Todas</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="contacto">Contacto</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="nosotros">Nosotros</Nav.Link>
      <Nav.Link eventKey={2} href="birrapedia">
        Birrapedia
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}