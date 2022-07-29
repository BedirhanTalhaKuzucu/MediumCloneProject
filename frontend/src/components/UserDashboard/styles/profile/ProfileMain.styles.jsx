import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: 5rem 10rem;
  justify-content: flex-start;
  align-items: flex-start;

  .settings {
    display: flex;
    flex-direction: column;
    margin-right: 10rem;
    white-space: nowrap;
    h3 {
      font-weight: bolder;
      color: black;
      font-size: 1.4rem;
    }
    & > * {
      text-decoration: none;
      color: gray;
      margin-bottom: 2rem;
      font-size: 1.3rem;
    }
  }
`;
