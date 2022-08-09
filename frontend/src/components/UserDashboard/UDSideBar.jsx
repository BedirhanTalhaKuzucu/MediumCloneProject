import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import {
  SideBarContainerStyle,
  TopicListStyle,
  UnlimitedButtonStyle,
} from "./styles/UDSideBar.styles";
import ReadingToday from "./UDSideBarParts/ReadingToday";
import UserProfile from "../UserDashboard/UDSideBarParts/UserProfile";


const topicList = [
  "FullStack",
  "Python",
  "Machine Learning",
  "Programming",
  "React",
  "Django",
];

const UDSlideBar = ({sideBarEffect, creatorInfo}) => {

  return (
    <SideBarContainerStyle>
      <UnlimitedButtonStyle>Get unlimited access</UnlimitedButtonStyle>

      <SearchBar />

      {sideBarEffect ? 
        <UserProfile creatorInfo = {creatorInfo} />        
      : 
        <ReadingToday />
      }
      {/* <TagUsersInfo /> */}
      {/* <UserProfile /> */}

      <TopicListStyle>
        <h5>Recommended topics</h5>
        {topicList?.map((item) => {
          return (
            <div key={item.id} className="topicItem">
              <button>{item}</button>
            </div>
          );
        })}
      </TopicListStyle>
    </SideBarContainerStyle>
  );
};

export default UDSlideBar;
