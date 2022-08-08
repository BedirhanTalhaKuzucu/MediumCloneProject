import styled from "styled-components";

export const CommentsStyles = styled.div`
  left: -100%;
  z-index: 1;

  .modal-header {
    font-size: 15px;

    .modal-title {
      font-size: 20px;
    }
  }

  .modal-body {
    display: flex;
    flex-direction: column;
    form {
      padding: 1rem;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      border-radius: 1rem;
    }
    textarea {
      align-self: center;
      border-radius: 1rem;
      border: none;
      padding: 0.5rem;
      outline: none;
    }
    .buttons {
      display: flex;
      justify-content: flex-end;
      margin: 1rem;
      .resetButton {
        color: black;
        margin-right: 2rem;
        background-color: white;
        border: none;
        opacity: 0.8;
        &:hover {
          opacity: 1;
        }
      }
      .submitButton {
        border-radius: 1rem;
      }
    }

    hr {
      margin: 2rem 0;
    }
  }
  .comments {
    .userInfo {
      display: flex;
      margin-bottom: 1rem;
      align-items: center;
      img {
        width: 32px;
        height: 32px;
        margin-right: 1rem;
      }
      .timeStamp {
        color: gray;
        font-size: 14px;
      }
    }

    .claps {
      cursor: pointer;
      margin-top: 1rem;
      &:hover {
        opacity: 0.9;
      }
      img {
        width: 24px;
        height: 24px;
        margin-right: 5px;
      }
    }
  }
`;

export const OpenButtonStyle = styled.div`
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
`;
