import styled from "styled-components";

export const MainStyle = styled.main`
  width: 100%;
  header {
    /* background-color: red; */
    margin: 5rem;
    .title {
      display: flex;
      align-items: center;
      margin-bottom: 2rem;
      img {
        width: 2rem;
        height: 2rem;
        margin-right: 1rem;
        background-color: #e6e6e6;
        border-radius: 50%;
        padding: 6px;
      }
    }
    button {
      margin-right: 1rem;
      margin-bottom: 1rem;
      border-radius: 2rem;
    }
  }
`;
