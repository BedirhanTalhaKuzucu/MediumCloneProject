import styled from "styled-components";


const ProfilImage = ({ className, blogCard }) => {
    return (
        <div className={className}>
            <img src={ blogCard.creatorInfo.user_img} alt=""  className=" " />
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