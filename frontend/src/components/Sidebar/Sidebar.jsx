import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import {StyledProfilImage} from './Sidebar.styled'

function Sidebar({storyData}) {


  return (
    <>
    <Container  fluid className="border-1 border-bottom border-grey" style={{maxHeight:'34rem' }} >
        <Container>
        <h6 className= "mt-5 mb-3" style={{fontWeight:"bolder" }} > <TrendingUpOutlinedIcon />  TRENDING ON MEDIUM</h6>
        <Row>
            { storyData ? 
                storyData.map((blogCard, index)=> (
                    <Col  md={6} lg={4} key = {index}  >
                      <Row>
                        <Col xs={2} className="numbers">
                            {index + 1 }
                        </Col>  
                        <Col xs={10}>
                        <div class="card-body">
                            <p class="card-text">
                                < StyledProfilImage blogCard= {blogCard} />
                                { blogCard.creatorInfo.first_name} { blogCard.creatorInfo.last_name} 
                            </p>
                            <h5 class="card-title topic-title"> { blogCard.title} </h5>
                            <p style={{color:"#757575" }} >{ blogCard.publish_date.split('T')[0]}</p>
                        </div>
                        </Col>
                      </Row>
                    </Col>

                )) 
                :
                <h2>Loading</h2> 
            }
            
        </Row>
        </Container>
    </Container>
    </>
  );
}

export default Sidebar;