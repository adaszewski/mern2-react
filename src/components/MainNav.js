import React from "react";
import "./MainNav.css";

import { Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from 'react-bootstrap/NavLink';
import Moment from "react-moment";
import { MomentTimezone } from "moment";


const MainNav = (props) => {
  const dateToFormat = Date();
  const locale='pl'
  const logout = (e) => {
    e.preventDefault();
    props.setUser(null);
    localStorage.setItem("user", null);
  };

  return (
    <Container className="nav-container">
      
      {props.user && (
        <span>
          Dziś jest <Moment local='pl-pl' format='dddd'>{dateToFormat}</Moment> , <Moment locale="de" format=" D MMMM YYYY">{dateToFormat}</Moment> Jesteś zalogowany jako:
          <span>{props.user} </span>{" "}
        </span>
      )}
      <Navbar as={Link} size='xxl' variant="primary" to="/">
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
          <Nav.Link as={Link} to="/clients">
            Pokaż listę klientów
          </Nav.Link>
        )}
        <br />

        {props.user && (
          <Nav.Link as={Link} to="/clients/search">
            Wyszukaj klientów
          </Nav.Link>
        )}
        <br />
        {props.user && (
          <Nav.Link as={Link} to="/contacts">
            Pokaż listę kontaktów
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

    // <Link as={Button} to="/client/nip/:nip" onClick={props.getClient}> </Link>
  );
};

export default MainNav;
