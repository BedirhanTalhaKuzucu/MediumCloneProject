import React from "react";
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

      <UserProfile />

      <TopicRecommended />
    </SideBarContainerStyle>
  );
};

export default UserListsAndStoriesSideBar;
