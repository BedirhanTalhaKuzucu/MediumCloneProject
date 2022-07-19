import React from "react";
import { Link } from "react-router-dom";
import {
  SearchInputStyle,
  SideBarContainerStyle,
  UnlimitedButtonStyle,
} from "./styles/UDSideBar.styles";

const UDSlideBar = () => {
  return (
    <SideBarContainerStyle>
      <UnlimitedButtonStyle>Get unlimited access</UnlimitedButtonStyle>

      <form>
        <SearchInputStyle />
      </form>

      <ul>
        <li className="readingToday">
          <Link to='#'>What We're Reading Today</Link>
        </li>
      </ul>

      <div>Recommended topics</div>

      



    </SideBarContainerStyle>
  );
};

export default UDSlideBar;
