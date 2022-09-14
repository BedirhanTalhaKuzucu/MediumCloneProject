import styled from "styled-components";

export const SideBarStyles = styled.div`
  overflow: auto;
`;

export const CardStyled = styled.div`
  /* background-color: red; */
  display: flex;
  .image {
    /* width: 20px; */
  }
`;

const ProfilImage = ({ className, blogCard }) => {
  return (
    <div className={className}>
      <img src={blogCard.creatorInfo.user_img} alt="" className=" " />
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
