import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cards from "../components/Cards"
import Categorys from "../components/Categorys";
import { useState, useEffect } from "react";


function Home() {    

  const [data, setData] = useState("")
    
    const getData = () => {
        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        fetch("http://127.0.0.1:8000/blog/posts/", requestOptions)
        .then(response => response.json())
        .then(result => {
            setData(result)
        })
        .catch(error => console.log('error', error));
    }

    useEffect(() => {
      getData()
    }, [])



  return (
    <>
    <Header/>
    <Sidebar/>
    <Container className="mt-5">
        <Row>
            <Col md={12} lg={{ span: 5,  order: 'last' }}>
                <Categorys/>
                a
            </Col>
            <Col md={12} lg={{ span: 7,  order: 'first' }}>
                { data ? 
                data.map((blogCard)=> (
                <Cards blog={blogCard}/> 
                )) 
                :
                <h2>Loading</h2> }

            </Col>
      </Row>
    </Container>
 
    </>
  );
}

export default Home;