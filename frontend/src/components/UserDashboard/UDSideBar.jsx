import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import TopicRecommended from "../SideBars/TopicRecommended";
import {
  SideBarContainerStyle,
  UnlimitedButtonStyle,
} from "./styles/UDSideBar.styles";
import ReadingToday from "./UDSideBarParts/ReadingToday";

const UDSlideBar = () => {
  return (
    <SideBarContainerStyle>
      <UnlimitedButtonStyle>Get unlimited access</UnlimitedButtonStyle>

      <SearchBar />

      <ReadingToday />

      <TopicRecommended />
    </SideBarContainerStyle>
  );
};

export default UDSlideBar;
