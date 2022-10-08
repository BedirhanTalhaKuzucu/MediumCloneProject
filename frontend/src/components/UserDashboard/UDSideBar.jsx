import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import TopicRecommended from "../SideBars/TopicRecommended";
import { SideBarContainerStyle, UnlimitedButtonStyle } from "./styles/UDSideBar.styles";
import ReadingToday from "./UDSideBarParts/ReadingToday";
import UserProfile from "../UserDashboard/UDSideBarParts/UserProfile";
import WhoToFollow from "./UDSideBarParts/WhoToFollow";
import { useNavigate } from "react-router-dom";

const UDSlideBar = ({ sideBarEffect, authorInfo, updateDetails }) => {

  const navigate = useNavigate();
  
  return (
    <SideBarContainerStyle>
      <UnlimitedButtonStyle onClick={() => navigate("/contributors")}>
        CONTRIBUTORS
      </UnlimitedButtonStyle>

      <SearchBar />

      {sideBarEffect ? (
        <UserProfile
          updateDetails={updateDetails}
          authorInfo={authorInfo ? authorInfo : ""}
        />
      ) : (
        <ReadingToday />
      )}

      <TopicRecommended />

      <WhoToFollow />
    </SideBarContainerStyle>
  );
};

export default UDSlideBar;
