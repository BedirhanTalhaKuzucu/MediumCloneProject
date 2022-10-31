import styled from "styled-components";

export const NavBar = styled.nav`
  background-color: #F3F4F4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  .mediumIcon > img {
    width: 170px;
    height: 55px;
    margin-left: 3rem;
  }
  .icons{
    display: flex;
    margin-right: 5rem;
  }

  .icons>*{
    width: 25px;
    height: 25px;
    margin-right: 2rem;
    padding: 2px;
    cursor: pointer;
    opacity: 0.6;
    &:last-child{
        opacity: 0.9;
    }
    &:hover{
        opacity: 1;
    }
  }
`;
