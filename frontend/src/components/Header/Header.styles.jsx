import styled from "styled-components";

export const HeaderStyles = styled.div`
  display: flex;
  justify-content: space-between;
  /* background-color: red; */
  align-items: center;
  padding: 0 3rem;

  .texts {
    padding: 1rem 0;
    text-align: center;
    /* width: 50%; */
  }
  .image {
    width: auto;
    height: 35%;

    .gif {
      width: auto;
      height: 22rem;
      margin: 2rem 0;
    }
  }

  @media only screen and (max-width: 750px) {
    display: flex;
    justify-content: center;
    .image {
      display: none;
    }
    .texts {
      text-align: center;
    }
  }
`;
