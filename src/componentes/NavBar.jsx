import React from "react";
import CartWidget from './CartWidget';
import {Navbar, Nav, NavDropdown, Container} from "react-bootstrap";
import {BrowserRouter, Switch, Route, useParams, Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';


export default function NavBar (){
    return(
      <>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Link to="/"><img src="https://raw.githubusercontent.com/jump7373/proyecto-final-mirabile/master/img/logo-cervezame.png" style={{width: "7rem"}} alt="" /></Link>
        <Nav className="me-auto">
          <Nav.Link><Link exact to="/">Inicio</Link></Nav.Link>
          <Nav.Link><Link exact to="/category/Ortuzar">Cervezas Ortuzar</Link></Nav.Link>
          <Nav.Link><Link to="/category/Baba">Cervezas Baba</Link></Nav.Link>
        </Nav>
        </Container>
      </Navbar>
     
    </>
    )
}