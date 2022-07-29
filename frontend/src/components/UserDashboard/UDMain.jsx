import React from "react";
import {
  ArticlesStyle,
  FollowingImg,
  FollowingListStyle,
  MainContainer,
  MainHeader,
  TopicsStyle,
} from "./styles/UDMain.styles";
import Tooltip from "@mui/material/Tooltip";
import MainFollowingTooltip from "./MainFollowingTooltip";
import { Link, NavLink, Outlet } from "react-router-dom";

const topicList = [
  "FullStack",
  "Python",
  "Machine Learning",
  "Programming",
  "React",
  "Django",
];

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
          <Tooltip
            title={<MainFollowingTooltip />}
            arrow
            componentsProps={{
              tooltip: {
                sx: {
                  backgroundColor: "white",
                },
              },
            }}
          >
            <FollowingImg src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"/>
          </Tooltip>
        </FollowingListStyle>
      </MainHeader>

      <ArticlesStyle>
        <NavLink
          to="following"
          style={({ isActive }) => ({ color: isActive && "black" })}
        >
          Following
        </NavLink>
        <Link to="recommended">Recommended</Link>
      </ArticlesStyle>
      <Outlet />
    </MainContainer>
  );
};

export default UDMain;
