import React from "react";
import {
  ArticllesStyle,
  FollowingImg,
  FollowingList,
  FollowingListStyle,
  MainContainer,
  MainHeader,
  TopicsStyle,
} from "./styles/UDMain.styles";
import Following from "./Following";
import Tooltip from "@mui/material/Tooltip";
import MainFollowingTooltip from "./MainFollowingTooltip";

const topicList = ["FullStack", "Python", "Machine Learning", "Programming",'React', 'Django'];

const UDMain = () => {
  return (
    <MainContainer>
      <MainHeader>
        <TopicsStyle>
          <p>YOUR TOPICS</p>
          <div className="scrollbar sc1">
            {topicList?.map((item) => {
              return (
                <div key={item.id}>
                  <button>{item}</button>
                </div>
              );
            })}
          </div>
        </TopicsStyle>

        <FollowingListStyle>
          <Tooltip title={<MainFollowingTooltip />} arrow>
            <FollowingImg />
          </Tooltip>
          <Tooltip title={<MainFollowingTooltip />} arrow>
            <FollowingImg />
          </Tooltip>
          <Tooltip title={<MainFollowingTooltip />} arrow>
            <FollowingImg />
          </Tooltip>
        </FollowingListStyle>
      </MainHeader>

      <ArticllesStyle>
        <a href="/">Following</a>
        <a href="/">Recommended</a>
      </ArticllesStyle>

      <Following />
      {/* Link ve Outlet gelecek */}
    </MainContainer>
  );
};

export default UDMain;
