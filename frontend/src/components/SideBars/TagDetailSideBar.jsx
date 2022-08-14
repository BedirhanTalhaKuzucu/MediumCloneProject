import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import TagSideBarUserInfo from "../TagDetailParts/TagSideBarUserInfo";
import {
  SideBarContainerStyle,
  UnlimitedButtonStyle,
} from "../UserDashboard/styles/UDSideBar.styles";
import WhoToFollow from "../UserDashboard/UDSideBarParts/WhoToFollow";
import TopicRecommended from "./TopicRecommended";

const TagDetailSideBar = () => {
  return (
    <SideBarContainerStyle>
      <UnlimitedButtonStyle>Get unlimited access</UnlimitedButtonStyle>

      <SearchBar />

      <TagSideBarUserInfo />

      <TopicRecommended />
      <WhoToFollow />
    </SideBarContainerStyle>
  );
};

export default TagDetailSideBar;
