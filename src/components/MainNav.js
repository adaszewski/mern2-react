import { Link } from "react-router-dom";
import { Container, Navbar, Nav, Button, NavLink } from "react-bootstrap";

const MainNav = (props) => {
  const logout = (e) => {
    e.preventDefault();
    props.setUser(null);
    localStorage.setItem("user", null);
  };

  return (
    <Navbar>
      <Container>
        <Navbar.Brand as={Link} to="/">
          Home
        </Navbar.Brand>

        <Nav className="me-auto">
         
          {props.user && (<NavLink as={Link} to="/add-client">
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
            <Nav.Link as={Link} to="/contacts">
              Pokaż listę kontaktów
            </Nav.Link>
          )}
          <br />

          {props.user && (
            <Nav.Link as={Button} to="/" onClick={logout}>
              Logout
            </Nav.Link>
          )}

        </Nav>
      </Container>
    </Navbar>
  );
};

export default MainNav;
