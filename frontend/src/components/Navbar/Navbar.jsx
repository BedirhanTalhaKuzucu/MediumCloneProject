import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import { useAppState } from "../../contexts/AppContext";
import { NavbarStyle } from "./Navbar.styled";

function ColorSchemesExample() {
  const { handleShow, setLogInShow } = useAppState();

  return (
    <NavbarStyle>
      <Navbar>
        <Container>
          <Navbar.Brand as={NavLink} to="home">
            <img
              src={logo}
              // style={{ width: "10rem" }}
              alt="logo"
              className="logo"
            />
          </Navbar.Brand>
          <Nav className="justify-content-end align-items-center Navbar-Right">
            <Nav.Link
              as={NavLink}
              to="/"
              className="text-dark me-1 other"
              onClick={() => setLogInShow(true)}
            >
              Our story
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/"
              className="text-dark me-1 other"
              onClick={() => setLogInShow(true)}
            >
              Membership
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="write"
              className="text-dark me-1 other"
              onClick={() => setLogInShow(true)}
            >
              Write
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/"
              className="text-dark me-1"
              onClick={() => setLogInShow(true)}
            >
              Sign In
            </Nav.Link>
            <Nav.Link as={NavLink} to="/">
              <Button
                variant="dark"
                style={{ borderRadius: "2rem" }}
                onClick={handleShow}
                className="getStarted"
              >
                Get Started
              </Button>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </NavbarStyle>
  );
}

export default ColorSchemesExample;
