import React from "react";
import "./MainNav.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavLink from "react-bootstrap/NavLink";
import { NavDropdown } from "react-bootstrap";
import Moment from "react-moment";
import 'moment/locale/pl'; 

function MainNav(props) {
  const dateToFormat = Date();

  const logout = (e) => {
    e.preventDefault();
    props.setUser(null);
    localStorage.setItem("user", null);
  };

  

  return (
    <Container className="nav-container">
      {props.user && (
        <span>
          Dziś jest
          <Moment format="dddd">{dateToFormat}</Moment>,
          <Moment format=" D MMMM YYYY">{dateToFormat}</Moment> Jesteś
          zalogowany jako:
          <span>{props.user} </span>{" "}
        </span>
      )}
      <Navbar as={Link} size="xxl" variant="primary" to="/">
        Home
      </Navbar>
      <Nav className="me-auto">
        {props.user && (
          <NavLink as={Link} to="/add-client">
            Dodaj klienta
          </NavLink>
        )}
        <br />

        {props.user && (
          <Nav.Link as={Link} to="/houses">
            Pokaż listę domów
          </Nav.Link>
        )}
        <br />

        {props.user && (
          <NavDropdown title="Szukaj po" id="nav-dropdown">
            <NavDropdown.Item as={Link} to="/clients/search/nip" eventKey="4.1">
              NIP
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/clients/search/miasto"
              eventKey="4.2"
            >
              Miasto
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/clients/search/opiekun"
              eventKey="4.3"
            >
              Opiekun
            </NavDropdown.Item>
          </NavDropdown>
        )}
        <br />
        {props.user && (
          <Nav.Link as={Link} to="/add-patient">
            dodaj pacjenta
          </Nav.Link>
        )}
        <br />
        <br />
        {props.user && (
          <Nav.Link as={Link} to="/patients">
            Pokaż listę pacjentów
          </Nav.Link>
        )}
        <br />

  

        {props.user && (
          <Nav.Link as={Link} to="/" onClick={logout}>
            Logout
          </Nav.Link>
        )}
      </Nav>
    </Container>
  );
}

export default MainNav;
