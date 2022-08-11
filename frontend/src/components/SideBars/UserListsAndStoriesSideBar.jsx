import React, {useState, useEffect} from "react";
import SearchBar from "../SearchBar/SearchBar";
import {
  SideBarContainerStyle,
  UnlimitedButtonStyle,
} from "../UserDashboard/styles/UDSideBar.styles";
import UserProfile from "../UserDashboard/UDSideBarParts/UserProfile";
import TopicRecommended from "./TopicRecommended";

const UserListsAndStoriesSideBar = () => {

  
  return (
    <SideBarContainerStyle>
      <UnlimitedButtonStyle>Get unlimited access</UnlimitedButtonStyle>
      <SearchBar />
      <UserProfile editOrFollowButton={true} />

      <TopicRecommended />
    </SideBarContainerStyle>
  );
};

export default UserListsAndStoriesSideBar;
