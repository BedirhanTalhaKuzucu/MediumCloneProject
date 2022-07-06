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
    <Container>
        <Categorys/>  
        <Cards/>
    </Container>
 
    </>
  );
}

export default Home;