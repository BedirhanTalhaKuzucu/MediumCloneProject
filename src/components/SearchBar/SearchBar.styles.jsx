import styled from "styled-components";

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


const ProfilImage = ({ className, image }) => {
    return (
        <div className={className}>
            <img src={ image} alt="ass"  className=" " />
        </div>
    );
};


export const StyledProfilImage = styled(ProfilImage)`
    display:inline;
    img{
        width : 2rem;
        border-radius: 50px;
    }
    padding-right:10px;
`;

