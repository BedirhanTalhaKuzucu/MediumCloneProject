import React from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import {
  SideBarContainerStyle,
  UnlimitedButtonStyle,
} from "../UserDashboard/styles/UDSideBar.styles";
import UserProfile from "../UserDashboard/UDSideBarParts/UserProfile";
import WhoToFollow from "../UserDashboard/UDSideBarParts/WhoToFollow";
import TopicRecommended from "./TopicRecommended";

const UserListsAndStoriesSideBar = () => {
  const navigate = useNavigate();
  return (
    <SideBarContainerStyle>
      <UnlimitedButtonStyle onClick={() => navigate("/contributors")}>
        CONTRIBUTORS
      </UnlimitedButtonStyle>
      <SearchBar />
      <UserProfile editOrFollowButton={true} />

      <TopicRecommended />
      <WhoToFollow />
    </SideBarContainerStyle>
  );
};

export default UserListsAndStoriesSideBar;
