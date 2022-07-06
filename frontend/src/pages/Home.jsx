import Head from "../components/Head"
import Trendtopic from "../components/Trendtopic"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
  return (
    <>
    <Head/>
    <Trendtopic/>
    <Container  fluid className="border-1 border-bottom border-grey" style={{height:'34rem' }} >
        <Container>
        
        </Container>
    </Container>

    </>
  );
}

export default Home;