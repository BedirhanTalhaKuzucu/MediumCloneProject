import styled from "styled-components";

export const AboutContainer = styled.div`
  h3 {
    font-size: 1.5rem;
    font-weight: bolder;
    margin-bottom: 2rem;
  }
  nav {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    h5 {
      margin-bottom: 1.5rem;
      font-weight: bolder;
      font-size: 1.2rem;
    }
    input {
      width: 100%;
      border: none;
      border-bottom: 1px solid #bdbdbd;
      color: gray;
      &:focus {
        outline: none;
      }
    }
    p {
      font-size: 13px;
      margin-top: 1rem;
    }

    .photoCon {
      display: flex;
    }
    .profilePhoto {
      width: 100px;
      height: 100px;
      background-color: lightcyan;
      border-radius: 50%;
      border: none;
    }

    .userName-URL {
      display: flex;
      flex-direction: column;
      width: 500px;
      & > * {
        display: flex;
        margin-bottom: 2rem;
        width: 100%;
        & > * {
          margin-right: 2rem;
        }
      }
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  margin-left: 3rem;
  & > * {
    background-color: white;
    /* width: 2rem; */
    border: 1px solid #bdbdbd;
    padding: 0 15px;
    height: 2.3rem;
    margin-left: 1rem;
    border-radius: 1rem;
    color: gray;
    font-size: 0.8rem;
    &:hover {
      border-color: black;
    }
  }
`;
