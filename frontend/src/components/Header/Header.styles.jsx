import styled from "styled-components";

export const HeaderStyles = styled.div`
  display: flex;
  justify-content: space-between;
  /* background-color: red; */
  align-items: center;

  .texts {
    padding: 1rem 0;
    text-align: center;
    width: 50%;
  }
  .image {
    width: 50%;
    height: 30%;
    .gif {
      width: auto;
      height: 20rem;
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
