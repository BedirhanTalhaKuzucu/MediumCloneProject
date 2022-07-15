import styled from "styled-components";

export const LeftSideBar = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  position: sticky;
  top: 0;
  padding: 1.2rem;
  height: 100vh;
  width: 5.2rem;
  border-right: 1px solid #f1eee9;
`;

export const LogoStyle = styled.a`
  & > img {
    width: 100%;
    height: 100%;
  }
  position: sticky;
  top: 0;
  margin-top: 2rem;
`;

export const IconsStyle = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  margin-top: 3rem;
  & > a {
  }
`;

export const IconStyle = styled.img`
  width: 22px;
  height: 22px;
  filter: invert(48%) sepia(13%);
`;

export const UserAccountStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  bottom: 0;
  & > * {
    margin: 2rem 1rem;
  }
`;
