import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import {
  SideBarContainerStyle,
  UnlimitedButtonStyle,
} from "../UserDashboard/styles/UDSideBar.styles";
import UserProfile from "../UserDashboard/UDSideBarParts/UserProfile";
import WhoToFollow from "../UserDashboard/UDSideBarParts/WhoToFollow";
import TopicRecommended from "./TopicRecommended";

const WriterPageSideBar = ({authorInfo}) => {
  // console.log(authorInfo)
  return (
    <SideBarContainerStyle>
      <UnlimitedButtonStyle>Get unlimited access</UnlimitedButtonStyle>
      <SearchBar />
      <UserProfile  authorInfo ={authorInfo} />
    </SideBarContainerStyle>
  );
};

export default WriterPageSideBar;
