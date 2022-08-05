import styled from "styled-components";

export const TagUsersInfoContainer = styled.div`
  .numbers {
    display: flex;
    color: black;
    margin: 1rem 0;
    .stories {
      margin-right: 5rem;
    }
    span {
      font-size: 16px;
      color: gray;
    }
  }
  .userImages {
    display: flex;
    position: relative;
    img {
      height: 36px;
      width: 36px;
      border-radius: 50%;
      border: 1px solid white;
      margin-right: -15px;
    }
  }
`;
