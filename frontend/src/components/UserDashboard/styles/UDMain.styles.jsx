import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100vw;
  margin: 3rem 7rem;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
    padding: 3rem;
   /* background-color: red; */
   z-index: -1;
  }
`;

export const MainHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* margin: 0 5rem; */
`;

export const TopicsStyle = styled.nav`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  p {
    color: gray;
    margin-right: 2rem;
    font-size: 15px;
  }
  .scrollbar {
    display: flex;
    overflow-x: auto;
    width: 500px;
    div {
      white-space: nowrap;
      /* width: 100%; */
      margin: 5px 10px;
      background-color: #e6e6e6;
      padding: 5px 10px;
      border-radius: 1rem;
      font-weight: lighter;
      font-size: small;
      button {
        border: none;
        background-color: #e6e6e6;
        &:hover {
          background-color: #dfdfdf;
        }
      }
      &:hover {
        background-color: #dfdfdf;
      }
    }
  }
  .sc1::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  .sc1::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 10px;
  }
  .sc1::-webkit-scrollbar-thumb {
    background-color: #dfdfdf;
    border-radius: 10px;
  }
`;

export const FollowingListStyle = styled.div`
  align-self: flex-start;
`;

export const FollowingImg = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: lightblue;
  margin: 1rem 0.5rem;
  cursor: pointer;
`;

export const ArticlesStyle = styled.article`
  margin-top: 3rem;
  border-bottom: 1px solid grey;
  padding-bottom: 1rem;
  & > a {
    text-decoration: none;
    font-size: 14px;
    color: gray;

    margin-right: 1.5rem;
    font-family: Arial, Helvetica, sans-serif;
    &:active,
    &:focus {
      color: black;
    }
  }
`;
