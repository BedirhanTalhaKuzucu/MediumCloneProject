import styled from "styled-components";

export const TopButtonStyles = styled.div`
  .topButton {
    background-color: cyan;
    position: fixed;
    bottom: 20%;
    right: 30%;
  }
  .arrowbtn {
    background-color: black;
    position: fixed;
    bottom: 10%;
    right: 28%;
    width: 50px;
    height: 50px;
    border-radius: 100px;
    background: #cccccc;
    /* border-color: white; */
    border: 2px solid white;
    color: #111;
    cursor: pointer;
    transition: all 0.25s ease-in-out;
    opacity: 0.6;
  }
  .arrowbtn:hover {
    color: hotpink;
    background: #111;
    border: 2px solid hotpink;
    opacity: 0.9;
  }
  .arrowbtn:after {
    position: absolute;
    display: inline-block;
    content: "";
    width: 25px;
    height: 25px;
    top: 50%;
    left: 50%;
  }

  .arrowbtn-up:after {
    margin-left: -12.5px;
    margin-top: -6.25px;
    border-top: 2px solid;
    border-left: 2px solid;
    transform: rotateZ(45deg);
  }

  @media only screen and (max-width: 991px) {
    // example
    .arrowbtn {
      display: none;
    }
  }
`;
