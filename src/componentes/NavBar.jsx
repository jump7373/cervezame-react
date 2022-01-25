import React from "react";
import CartWidget from './CartWidget';
import {Navbar, Nav, NavDropdown, Container} from "react-bootstrap";
import {BrowserRouter, Switch, Route, useParams, Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';


export default function NavBar (){
    return(
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Container>
  <Link to={"/"}><Navbar.Brand>Inicio</Navbar.Brand></Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
        
        <NavDropdown title="Cervezas" id="collasible-nav-dropdown">            
            {/* <NavDropdown.Item>Lager</NavDropdown.Itemhref=>
            <NavDropdown.Item>IPA</NavDropdown.Item>
            <NavDropdown.Item>Pilsen</NavDropdown.Itemf=>
            <NavDropdown.Item>Rojas</NavDropdown.Itemhref=>
            <NavDropdown.Divider />
            <NavDropdown.Item>Todas</NavDropdown.Itemhref=> */}
        </NavDropdown>
       <Link to={"/contacto"}><Nav.Link>Contacto</Nav.Link></Link>
    </Nav>
    <Nav>
      <Nav.Link>Nosotros</Nav.Link>
      <Nav.Link eventKey={2}>
        Birrapedia
      </Nav.Link>
      <CartWidget />
    </Nav>
  </Navbar.Collapse>
  </Container>
  
</Navbar>
    )
}