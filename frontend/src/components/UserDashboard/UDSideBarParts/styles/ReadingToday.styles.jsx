import styled from "styled-components";

export const Container = styled.div`
  a {
    width: fit-content;
    cursor: pointer;
    margin-top: 1rem;
    text-decoration: none;
    color: black;
    nav {
      img {
        width: 20px;
        height: 20px;
        border-radius: 50%;
      }

      span {
        font-size: 13px;
        font-weight: bold;
        margin-left: 0.5rem;
      }
      h6 {
        font-weight: bold;
        margin-top: 0.5rem;
        margin-bottom: 1rem;
      }
    }
  }
`;
