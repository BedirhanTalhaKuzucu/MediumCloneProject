import styled from "styled-components";

export const YourStoriesStyles = styled.div`
  /* background-color: red; */
  width: 100%;
  margin: 0 7rem;
  header {
    display: flex;
    justify-content: space-between;
    margin: 4rem 0;
    h1 {
      font-size: 40px;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: bold;
    }
    button {
      border-radius: 2rem;
      height: 2.5rem;
    }
  }
  .links {
    border-bottom: 1px solid gray;
    padding-bottom: 1.5rem;
    a {
      text-decoration: none;
      margin-right: 2rem;
      color: black;
      padding-bottom: 1.5rem;
      opacity: 0.6;
    }
  }
`;
