import styled from "styled-components";

export const TooltipContainer = styled.main`
  background-color: white;
  color: black;
  opacity: 1;
  width: 300px;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  .div1 {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    img {
      width: 30px;
      height: 30px;
      border: none;
      border-radius: 50%;
      background-color: lightblue;
      margin-right: 1rem;
    }
    h5{
      margin-top: 1rem;
    }
  }

  .div2{
    font-size: 14px;
  }

  .div3{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    button{
      background-color: white;
      color: green;
      border-radius: 1rem;
      padding: 0 0.8rem;
      border-color: green;
    }
    p{
      margin-top: 1rem;
      color: gray;
    }
  }
`;
