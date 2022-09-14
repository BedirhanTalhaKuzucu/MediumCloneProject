import styled from "styled-components";

export const SideBarStyles = styled.div`
  overflow: auto;
`;

export const CardStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .cardText {
    width: 50%;
  }
  .image {
    object-fit: cover;
  }

  @media only screen and (max-width: 750px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    margin: 0;
    border-bottom: 1px solid grey;

    .cardText {
      width: 100%;
    }
    .image {
      margin-left: 10px;
      object-fit: cover;
    }
    .card-text {
      font-size: 18px;
    }
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
    object-fit: cover;
  }
  padding-right: 10px;
`;
