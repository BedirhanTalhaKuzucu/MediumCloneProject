import React from "react";
import {
  SearchInputStyle,
  SlideBarContainerStyle,
  UnlimitedButtonStyle,
} from "./styles/UDSlideBar.styles";

const UDSlideBar = () => {
  return (
    <SlideBarContainerStyle>
      <UnlimitedButtonStyle>Get unlimited access</UnlimitedButtonStyle>

      <form>
        <SearchInputStyle />
      </form>

      <ul>
        <li>
          <a>What We're Reading Today</a>
        </li>
      </ul>

      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>Lorem ipsum dolor sit amet.</p>
    </SlideBarContainerStyle>
  );
};

export default UDSlideBar;
