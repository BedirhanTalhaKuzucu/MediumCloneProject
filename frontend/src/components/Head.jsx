import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button';
import Icongif from "../assets/Icongif.png";



function Head() {
  return (
    
    <Container style={{height:'28rem' }} fluid className=" bg-warning border-1 border-bottom border-dark" >
        <Container  className="h-100 ">
            <Row   className= " h-100  justify-content-center align-items-center">
                <Col className= " ">
                    <h1 className= "medium pb-3" >Stay curious.</h1>
                    <h5 className= "pb-5" >Discover stories, thinking, and expertise from writers on any topic.</h5>
                    <Button variant="dark" style={{borderRadius :'2rem', width:"13rem" }}  >Start Reading</Button>
                </Col>
                <Col >
                    <img src={Icongif}  alt=""  style={{'width' : '20rem' }} className= "mx-auto  " />
                </Col>
            </Row>
        </Container>
    </Container>
  );
}

export default Head;