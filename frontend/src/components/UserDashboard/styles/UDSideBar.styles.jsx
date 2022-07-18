import styled from "styled-components";

export const SideBarContainerStyle = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  position: sticky;
  top: 0;
  left: 0;
  height: 100%;
  padding: 1rem;
  width: 300px;
  border-left: 1px solid #e0deca;

  ul {
    /* list-style: none; */
    li {
      a {
        text-decoration: none;
        color: black;
        font-weight: bold;
      }
    }
  }
`;

export const UnlimitedButtonStyle = styled.button`
  background-color: black;
  color: white;
  padding: 5px 3rem;
  border-radius: 2rem;
  margin: 2rem 0;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
`;

export const SearchInputStyle = styled.input.attrs({
  type: "search",
  placeholder: "Search",
})`
  border-radius: 2rem;
  padding: 5px 20px;
  border-color: #e0deca;
  margin: 1rem;
  &:focus {
    outline: none;
  }
`;
