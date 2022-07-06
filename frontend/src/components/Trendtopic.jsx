import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';


function Trendtopic() {
  return (
    <>
    <Container  fluid className="border-1 border-bottom border-grey" style={{height:'34rem' }} >
        <Container>
        <h6 className= "mt-5 mb-3" style={{fontWeight:"bolder" }} > <TrendingUpOutlinedIcon />  TRENDING ON MEDIUM</h6>
        <Row>
            <Col  md={6} lg={4}  >
                <Row>
                    <Col xs={2} className="numbers">
                        01
                    </Col>
                    <Col xs={10}>
                    <div class="card-body">
                        <p class="card-text">User</p>
                        <h5 class="card-title topic-title">title Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, illum. </h5>
                        <p style={{color:"#757575" }} >jun 11</p>
                    </div>
                    </Col>
                </Row>
            </Col>
            <Col  md={6} lg={4} >
                <Row>
                    <Col xs={2} className="numbers">
                        02
                    </Col>
                    <Col xs={10}>
                    <div class="card-body">
                        <p class="card-text">User</p>
                        <h5 class="card-title topic-title">title Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, illum. </h5>
                        <p style={{color:"#757575" }} >jun 11</p>
                    </div>
                    </Col>
                </Row>
            </Col>
            <Col  md={6} lg={4} >
                <Row>
                    <Col xs={2} className="numbers">
                        03
                    </Col>
                    <Col xs={10}>
                    <div class="card-body">
                        <p class="card-text">User</p>
                        <h5 class="card-title topic-title">title Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, illum. </h5>
                        <p style={{color:"#858080" }} >jun 11</p>
                    </div>
                    </Col>
                </Row>
            </Col>
            <Col  md={6} lg={4} >
                <Row>
                    <Col xs={2} className="numbers">
                        04
                    </Col>
                    <Col xs={10}>
                    <div class="card-body">
                        <p class="card-text">User</p>
                        <h5 class="card-title topic-title">title Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, illum. </h5>
                        <p style={{color:"#858080" }} >jun 11</p>
                    </div>
                    </Col>
                </Row>
            </Col>
            <Col  md={6} lg={4} >
                <Row>
                    <Col xs={2} className="numbers">
                        05
                    </Col>
                    <Col xs={10}>
                    <div class="card-body">
                        <p class="card-text">User</p>
                        <h5 class="card-title topic-title">title Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, illum. </h5>
                        <p style={{color:"#858080" }} >jun 11</p>
                    </div>
                    </Col>
                </Row>
            </Col>
            <Col  md={6} lg={4} >
                <Row>
                    <Col xs={2} className="numbers">
                        06
                    </Col>
                    <Col xs={10}>
                    <div class="card-body">
                        <p class="card-text">User</p>
                        <h5 class="card-title topic-title">title Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, illum. </h5>
                        <p style={{color:"#858080" }} >jun 11</p>
                    </div>
                    </Col>
                </Row>
            </Col>
        </Row>
        </Container>
    </Container>
    </>
  );
}

export default Trendtopic;