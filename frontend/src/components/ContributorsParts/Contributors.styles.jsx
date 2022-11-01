import styled from "styled-components";

export const ContributorsStyles = styled.div`
  header {
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 2rem;
    color: #fff;
    background-color: #16213e;
    margin-bottom: 30px;
  }

  /* Title */
  header h1 {
    font-weight: 300;
    font-size: 24px;
    color: #eee;
    letter-spacing: 2px;
    text-align: center;
    text-transform: uppercase;
    margin: 0 !important;
    padding: 25px;

    @media only screen and (max-width: 750px) {
      display: none;
    }
  }
  .siteRepo {
    font-size: 20px;
    opacity: 0.8;

    @media only screen and (max-width: 750px) {
      font-size: 1rem;
    }
  }
  .siteRepo:hover {
    opacity: 1;
  }

  @import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700,800,900|Open Sans:400,600,800");

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  div,
  input,
  p,
  a {
    font-family: "Open Sans";
    margin: 0px;
  }

  a,
  a:hover,
  a:focus {
    color: inherit;
  }

  body {
    background-color: #f1f2f3;
  }

  .profile-card-4 {
    max-width: 300px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    position: relative;
    margin: 1rem auto;
    cursor: pointer;
  }

  .profile-card-4 img {
    transition: all 0.25s linear;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .profile-card-4 .profile-content {
    position: relative;
    padding: 15px;
    background-color: #fff;
    height: 12rem;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .profile-card-4 .profile-name {
    font-weight: bold;
    /* position: absolute; */
    left: 0px;
    right: 0px;
    /* top: -70px; */
    color: #5a4f35;
    font-size: 20px;
    /* margin-top: 2rem; */
  }

  .profile-card-4 .profile-name p {
    font-weight: 600;
    font-size: 13px;
    letter-spacing: 1.5px;
  }

  .profile-card-4 .profile-description {
    color: #777;
    font-size: 12px;
    padding: 10px;
  }

  .profile-card-4 .profile-overview {
    padding: 10px 0px;
  }

  .profile-card-4 .profile-overview p {
    font-size: 10px;
    font-weight: 600;
    color: #777;
  }

  .profile-card-4 .profile-overview h4 {
    color: #273751;
    font-weight: bold;
  }

  .profile-card-4 .profile-content::before {
    content: "";
    position: absolute;
    height: 20px;
    top: -10px;
    left: 0px;
    right: 0px;
    background-color: #fff;
    z-index: 0;
    transform: skewY(3deg);
  }

  .profile-card-4:hover img {
    transform: rotate(5deg) scale(1.1, 1.1);
    filter: brightness(110%);
  }
`;
