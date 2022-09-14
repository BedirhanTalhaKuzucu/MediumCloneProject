import styled from "styled-components";

export const HomeStyles = styled.div`
  /* background-color: red; */
  display: flex;
  flex-direction: column;

  .rowStyle {
    background-color: pink;
    display: flex;
    flex-direction: row-reverse;
    margin: 0 5rem;
    .categories {
      margin-left: 3rem;
    }
  }
  @media only screen and (max-width: 750px) {
    .rowStyle {
      background-color: pink;
      display: flex;
      flex-direction: column;
    }
  }
`;
