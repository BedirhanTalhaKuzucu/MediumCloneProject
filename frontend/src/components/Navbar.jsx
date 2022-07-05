import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/logo.png";
import Button from 'react-bootstrap/Button';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="warning" variant="light" fixed="top"  style={{height:'4.5rem' }} className="border-1 border-bottom border-dark ">
        <Container>
          <Navbar.Brand href="#home" > <img  src={logo} style={{'width' : '10rem' }} alt="logo" /> </Navbar.Brand>
          <Nav className="justify-content-end align-items-center "   >
            <Nav.Link href="#home" className="text-dark me-1">Our story</Nav.Link>
            <Nav.Link href="#features" className="text-dark me-1">Membership</Nav.Link>
            <Nav.Link href="#pricing" className="text-dark me-1">Write</Nav.Link>
            <Nav.Link href="#pricing" className="text-dark me-1">Sign In</Nav.Link>
            <Nav.Link href="#pricing me-1 "  >
                <Button variant="dark" style={{borderRadius :'2rem' }} >Get Started</Button>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;