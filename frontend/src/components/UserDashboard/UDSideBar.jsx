import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import TopicRecommended from "../SideBars/TopicRecommended";
import {
  SideBarContainerStyle,
  UnlimitedButtonStyle,
} from "./styles/UDSideBar.styles";
import ReadingToday from "./UDSideBarParts/ReadingToday";
import UserProfile from "../UserDashboard/UDSideBarParts/UserProfile";

const UDSlideBar = ({ sideBarEffect, creatorInfo, storyId }) => {
  return (
    <SideBarContainerStyle>
      <UnlimitedButtonStyle>Get unlimited access</UnlimitedButtonStyle>

      <SearchBar />

      {sideBarEffect ? (
        <UserProfile creatorInfo={creatorInfo} storyId = {storyId} />
      ) : (
        <ReadingToday />
      )}

      <TopicRecommended />
    </SideBarContainerStyle>
  );
};

export default UDSlideBar;
