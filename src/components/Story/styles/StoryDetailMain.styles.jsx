import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  margin: 5rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  .authorInf {
    display: flex;

    img{
        cursor: pointer;
    }
    .AuthorPhoto {
      background-color: lightcyan;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 1rem;
    }
  }

  .icons {
    /* background-color: red; */
    & > * {
      margin-left: 1rem;
      width: 23px;
      height: 23px;
      opacity: 0.5;
      cursor: pointer;
      &:hover {
        opacity: 1;
      }
    }
  }
`;

export const ClapsRespond = styled.div`
  width: 170px;
  height: 40px;
  background-color: white;
  position: fixed;
  margin: 2rem 15rem;
  bottom: 0;
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  & > * {
    opacity: 0.5;
  }
  .icon {
    cursor: pointer;
    margin: 0 10px;
    &:hover {
      opacity: 0.9;
    }
    img {
      width: 24px;
      height: 24px;
      margin-right: 5px;
    }
  }
`;
