import styled from "styled-components";

export const TagSideBarPartStyle = styled.div`
  /* background-color: red; */
  .tagInfoCounter {
    display: flex;
    /* justify-content: space-around; */

    .nav1 {
      margin-left: 1rem;
      margin-right: 4rem;
    }
    nav {
      display: flex;
      flex-direction: column;
      margin: 1rem 0;
      p {
        color: gray;
      }
      h3 {
        font-size: 23px;
        font-weight: bold;
      }
    }
  }

  .users img {
    width: 2rem;
    height: 2rem;
    background-color: lightcyan;
    border-radius: 50%;
    border: none;
    margin-right: -10px;
    margin-bottom: 2rem;
  }
`;
