import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import { useAppState } from "../../contexts/AppContext";

function ColorSchemesExample() {
  const { handleShow, setLogInShow } = useAppState();

  return (
    <>
      <Navbar
        bg="warning"
        variant="light"
        style={{ height: "4.5rem" }}
        className="border-1 border-bottom border-dark"
      >
        <Container>
          <Navbar.Brand as={NavLink} to="home">
            {" "}
            <img src={logo} style={{ width: "10rem" }} alt="logo" />{" "}
          </Navbar.Brand>
          <Nav className="justify-content-end align-items-center ">
            <Nav.Link as={NavLink} to="home" className="text-dark me-1">
              Our story
            </Nav.Link>
            <Nav.Link as={NavLink} to="home" className="text-dark me-1">
              Membership
            </Nav.Link>
            <Nav.Link as={NavLink} to="home" className="text-dark me-1">
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
              >
                Get Started
              </Button>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
