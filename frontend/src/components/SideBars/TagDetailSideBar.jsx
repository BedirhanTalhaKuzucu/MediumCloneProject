import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import {
  SideBarContainerStyle,
  TopicListStyle,
  UnlimitedButtonStyle,
} from "../UserDashboard/styles/UDSideBar.styles";

const topicList = [
  "FullStack",
  "Python",
  "Machine Learning",
  "Programming",
  "React",
  "Django",
];

const TagDetailSideBar = () => {
  return (
    <SideBarContainerStyle>
      <UnlimitedButtonStyle>Get unlimited access</UnlimitedButtonStyle>

      <SearchBar />

      <TagUsersInfo />

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

export default TagDetailSideBar;
