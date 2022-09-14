import styled from "styled-components";

export const NavbarStyle = styled.div`
  border-bottom: 1px solid black;
  /* height: 4.5rem; */
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
    /* height: 4rem; */
    .logo {
      width: 6rem;
    }
    .Navbar-Right {
      .other {
        display: none;
      }
    }
    .getStarted {
      /* background-color: red; */
      font-size: 14px;
    }
  }
`;
