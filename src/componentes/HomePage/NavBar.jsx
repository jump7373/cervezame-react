import React from "react";

import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Components.css";
import CartWidget from "../Cart/CartWidget";

export default function NavBar() {
  return (
    <>
      <Navbar className="navBar" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img
                src="https://raw.githubusercontent.com/jump7373/proyecto-final-mirabile/master/img/logo-cervezame.png"
                style={{ width: "7rem" }}
                alt=""
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/" className="links" className="navBarCat">
                  Inicio
                </Link>
              </Nav.Link>
              <NavDropdown title="Categorías" id="basic-nav-dropdown">
                <div className="navBarCategorias">
                  <div className="categoriaNavBar">
                    <p>Busca por Pais</p>
                    <NavDropdown.Item>
                      <Link to="/category/Argentina" className="links">
                        Cervezas de Argentina
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/category/Internacional" className="links">
                        Cervezas Internacionales
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                      <Link to="/category/Alemania" className="links">
                        Cervezas de Alemania
                      </Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item>
                      <Link to="/category/Bélgica" className="links">
                        Cervezas de Bélgica
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/category/Chile" className="links">
                        Cervezas de Chile
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/category/España" className="links">
                        Cervezas de España
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/category/Holanda" className="links">
                        Cervezas de Holanda
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/category/Inglaterra" className="links">
                        Cervezas de Inglaterra
                      </Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item>
                      <Link to="/category/Irlanda" className="links">
                        Cervezas de Irlanda
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/category/Polonia" className="links">
                        Cervezas de Polonia
                      </Link>
                    </NavDropdown.Item>
                  </div>
                  <div className="categoriaNavBar">
                    <p>Busca por Marca</p>
                    <NavDropdown.Item>
                      <Link to="/category/Ortuzar" className="links">
                        Cervezas Ortuzar
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/category/Baba" className="links">
                        Cervezas Baba
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/category/Iron%20Maiden" className="links">
                        Cervezas Iron Maiden
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/category/Weidmann" className="links">
                        Cervezas Weidmann
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/category/St%20Feuillien" className="links">
                        Cervezas St Feuillien
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/category/Kunstmann" className="links">
                        Cervezas Kunstmann
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/category/Grolsch" className="links">
                        Cervezas Grolsch
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/category/Van%20Pur" className="links">
                        Cervezas Van Pur{" "}
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/category/Guiness" className="links">
                        Cervezas Guiness
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/category/KÖNIG" className="links">
                        Cervezas KÖNIG
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/category/Clausthaler" className="links">
                        Cervezas Clausthaler
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/category/Zahringer" className="links">
                        Cervezas Zahringer
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link
                        to="/category/Estrella%20de%20Galicia"
                        className="links"
                      >
                        Cervezas Estrella de Galicia
                      </Link>
                    </NavDropdown.Item>
                  </div>
                  <div className="categoriaNavBar">
                    <p>Busca por Envase</p>
                    <NavDropdown.Item>
                      <Link to="/category/Lata" className="links">
                        Cervezas en Lata
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/category/Botella" className="links">
                        Cervezas en Botella
                      </Link>
                    </NavDropdown.Item>
                  </div>
                </div>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="/Cervezas" className="links">
                    Ver todas las cervezas
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <Link to="/nosotros" className="links" className="navBarCat">
                  Nosotros
                </Link>
              </Nav.Link>
              <Nav.Link>
                <a href="mailto: jpmirabile@gmail.com" className="links" className="navBarCat">
                  Contacto
                </a>
              </Nav.Link>
              <CartWidget/>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
