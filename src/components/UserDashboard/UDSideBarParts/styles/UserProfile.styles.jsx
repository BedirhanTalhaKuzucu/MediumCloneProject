import styled from "styled-components";

export const Container = styled.div`
  /* background-color: red; */
  margin: 2rem 1rem;

  img {
    display: inline-block;
    width: 5rem;
    height: 5rem;
    background-color: lightpink;
    border-radius: 50%;
  }

  .username {
    font-weight: bold;
    margin: 1rem 0;
  }

  a {
    background-color: white;
    border: none;
    color: green;
    text-decoration: none;
    &:hover {
      color: black;
    }
  }
`;
