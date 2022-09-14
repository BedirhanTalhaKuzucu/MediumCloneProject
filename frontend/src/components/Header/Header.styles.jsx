import styled from "styled-components";

export const HeaderStyles = styled.div`
  display: flex;
  align-items: center;

  .texts {
    padding: 1rem 0;
    text-align: center;
  }

  @media only screen and (max-width: 750px) {
    .image {
      display: none;
    }
    .texts {
      text-align: center;
    }
  }
`;
