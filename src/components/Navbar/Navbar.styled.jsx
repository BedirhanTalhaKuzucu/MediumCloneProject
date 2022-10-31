import styled from "styled-components";

export const NavbarStyle = styled.div`
  border-bottom: 1px solid black;
  background-color: #ffc107;
  .logo {
    width: 10rem;
  }
  .Navbar-Right {
    a {
      text-decoration: none;
      padding: 0.5rem;
    }
  }

  @media only screen and (max-width: 750px) {
    .logo {
      width: 6rem;
    }
    .Navbar-Right {
      .other {
        display: none;
      }
    }
    .getStarted {
      font-size: 14px;
    }
  }
  /* @media only screen and (max-width: 400px) {
    .logo {
      width: 6rem;
    }
    .Navbar-Right {
      display: flex;
      flex-direction: column-reverse;
      .other {
        display: none;
      }
    }
    .getStarted {
      font-size: 14px;
    }
  } */
`;
