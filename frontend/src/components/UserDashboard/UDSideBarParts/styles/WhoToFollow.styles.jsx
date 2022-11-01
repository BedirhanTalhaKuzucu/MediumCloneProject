import styled from "styled-components";

export const UserFollowStyle = styled.div`
  /* background-color: red; */
  margin-top: 2rem;
  p {
    font-weight: bold;
  }

  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: none;
    background-color: lightpink;
  }

  .user {
    display: flex;
    /* justify-content: center; */
    align-items: center;
    margin-bottom: 1rem;
    .name {
      font-weight: bold;
      margin: 0 1rem;
      margin-bottom: 5px;
      cursor: pointer;
    }
    .shortBio {
      font-size: 13px;
      color: gray;
      margin: 0 10px;
      /* width: 100%; */
    }
    .follow {
      border-radius: 1.5rem;
      /* padding: 0.5rem; */
      width: 66px;
      height: 35px;
    }
  }
`;
