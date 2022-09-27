import React from "react";
import Container from "react-bootstrap/Container";
import { StyledCard } from "./Cards.styled.jsx";

function Cards({ blog }) {
  return (
    <Container className="mt-5">
      <StyledCard blog={blog} />
    </Container>
  );
}

export default Cards;
