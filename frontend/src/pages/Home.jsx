import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Cards from "../components/Cards"
import Categorys from "../components/Categorys";

function Home() {
  return (
    <>
    <Header/>
    <Sidebar/>
    <Container className="mt-5">
        <Row>
            <Col md={12} lg={{ span: 6,  order: 'last' }}>
                <Categorys/>

            </Col>
            <Col md={12} lg={{ span: 6,  order: 'first' }}>
                <Cards/>

            </Col>
      </Row>
    </Container>
 
    </>
  );
}

export default Home;