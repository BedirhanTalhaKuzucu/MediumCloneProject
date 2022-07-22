import React from "react";
import { Link } from "react-router-dom";
import {
  SearchInputStyle,
  SideBarContainerStyle,
  TopicListStyle,
  UnlimitedButtonStyle,
} from "./styles/UDSideBar.styles";

const topicList = [
  "FullStack",
  "Python",
  "Machine Learning",
  "Programming",
  "React",
  "Django",
];

const UDSlideBar = () => {
  return (
    <SideBarContainerStyle>
      <UnlimitedButtonStyle>Get unlimited access</UnlimitedButtonStyle>

      <form>
        <SearchInputStyle />
      </form>

      <Link to="#" className="readingToday">
        <span></span> What We're Reading Today
      </Link>

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
