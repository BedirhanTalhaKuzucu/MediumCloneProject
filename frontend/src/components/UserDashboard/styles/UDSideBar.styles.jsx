import styled from "styled-components";

export const SideBarContainerStyle = styled.main`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  flex-shrink: 0;
  position: sticky;
  top: 0;
  left: 0;
  height: 100%;
  padding: 1.5rem;
  width: 370px;
  border-left: 1px solid #e0deca;
  .readingToday {
    text-decoration: none;
    color: black;
    font-weight: bold;
    font-size: 18px;
    span {
      display: inline-block;
      background-color: green;
      width: 10px;
      height: 10px;
      border-radius: 50%;
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

export const TopicListStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  h5 {
    display: block;
    margin: 1rem 2rem;
    margin-left: 10px;
  }
  .topicItem {
    white-space: nowrap;
    /* width: 100%; */
    margin: 5px;
    background-color: #e6e6e6;
    padding: 5px 10px;
    border-radius: 1rem;
    font-weight: lighter;
    font-size: small;
    button {
      text-decoration: none;
      color: black;
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
`;

const ProfilImage = ({ className, image }) => {
  return (
    <div className={className}>
      <img src={image} alt="ass" className=" " />
    </div>
  );
};

export const StyledProfilImage = styled(ProfilImage)`
  display: inline;
  img {
    width: 2rem;
    border-radius: 50px;
  }
  padding-right: 10px;
`;
