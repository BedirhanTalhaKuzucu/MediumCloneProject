import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


function Categorys() {
  return (
    <Container className="border-1 border-bottom border-grey mt-5"  >
        <h6 className= "mt-5 mb-3" style={{fontWeight:"bolder" }} >DISCOVER MORE OF WHAT MATTERS TO YOU </h6>
        <div className="d-flex flex-wrap gap-2 mb-4">
            <Button variant="outline-secondary">Self</Button>
            <Button variant="outline-secondary">Relationships</Button>
            <Button variant="outline-secondary">Data Science </Button>
            <Button variant="outline-secondary">Programming </Button>
            <Button variant="outline-secondary">Productivy </Button>
            <Button variant="outline-secondary">Javascript</Button>
            <Button variant="outline-secondary">Machine Learning</Button>
            <Button variant="outline-secondary">Politics</Button>
            <Button variant="outline-secondary">Health</Button>
        </div>
    </Container> 
  )
}

export default Categorys