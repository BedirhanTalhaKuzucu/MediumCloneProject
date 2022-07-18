import React from "react";
import {
  ArticllesStyle,
  FollowingImg,
  FollowingListStyle,
  MainContainer,
  MainHeader,
  TopicsStyle,
} from "./styles/UDMain.styles";
import Following from "./Following";
import Tooltip from "@mui/material/Tooltip";
import MainFollowingTooltip from "./MainFollowingTooltip";
import { Link, NavLink, Outlet } from "react-router-dom";

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
        <NavLink to='following' style={({ isActive }) => ({ color: isActive && 'black'})}>Following</NavLink>
        <Link to='recommended'>Recommended</Link>
      </ArticllesStyle>
      <Outlet/>

    </MainContainer>
  );
};

export default UDMain;
