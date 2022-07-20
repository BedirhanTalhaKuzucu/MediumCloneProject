import styled from "styled-components";

export const SecurityContainer = styled.div`
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
  }
  .deleteAcoount{
    /* display: flex; */
    flex-direction: column;
    a{
        color: gray;
    }
  }
`;
