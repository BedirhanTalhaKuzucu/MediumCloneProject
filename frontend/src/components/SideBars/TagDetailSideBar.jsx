import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import TagSideBarUserInfo from "../TagDetailParts/TagSideBarUserInfo";
import {
  SideBarContainerStyle,
  UnlimitedButtonStyle,
} from "../UserDashboard/styles/UDSideBar.styles";
import TopicRecommended from "./TopicRecommended";

const TagDetailSideBar = () => {
  return (
    <SideBarContainerStyle>
      <UnlimitedButtonStyle>Get unlimited access</UnlimitedButtonStyle>

      <SearchBar />

      <TagSideBarUserInfo />

      <TopicRecommended />
    </SideBarContainerStyle>
  );
};

export default TagDetailSideBar;
