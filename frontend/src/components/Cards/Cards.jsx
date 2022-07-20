import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import {StyledCard} from './Cards.styled.jsx'

function Cards({blog}) {
  console.log(blog)
  return (
    <Container  className="mt-5" >
        <StyledCard blog= {blog} />    
    </Container>  
  )
}

export default Cards
