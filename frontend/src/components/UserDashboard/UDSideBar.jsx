import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import TopicRecommended from "../SideBars/TopicRecommended";
import {
  SideBarContainerStyle,
  UnlimitedButtonStyle,
} from "./styles/UDSideBar.styles";
import ReadingToday from "./UDSideBarParts/ReadingToday";
import UserProfile from "../UserDashboard/UDSideBarParts/UserProfile";
import WhoToFollow from "./UDSideBarParts/WhoToFollow";

const UDSlideBar = ({ sideBarEffect,  authorInfo, updateDetails }) => {
  return (
    <SideBarContainerStyle>
      <UnlimitedButtonStyle>Get unlimited access</UnlimitedButtonStyle>

      <SearchBar />

      {sideBarEffect ? (
        <UserProfile updateDetails = {updateDetails} authorInfo = {authorInfo ? authorInfo : "" }  />
      ) : (
        <ReadingToday />
      )}

      <TopicRecommended />

      <WhoToFollow />
    </SideBarContainerStyle>
  );
};

export default UDSlideBar;
