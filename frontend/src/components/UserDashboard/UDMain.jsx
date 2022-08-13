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
import { useEffect, useState } from "react";
import { userDetails } from "../../helpers/apiRequests";

const topicList = [
  "FullStack",
  "Python",
  "Machine Learning",
  "Programming",
  "React",
  "Django",
];

const UDMain = () => {
  const [followingTag, setFollowingTag] = useState();
  const [followingUser, setFollowingUser] = useState();

  const getUserId = () => {
    const get_session_user_info = JSON.parse(sessionStorage.getItem("user_info"))
    const userId = get_session_user_info.userInfo.profileInfoId
    return userId
  }

  useEffect(() => {
    const userId = getUserId()
    userDetails(setFollowingTag, setFollowingUser, userId);
  }, []);

  return (
    <MainContainer>
      <MainHeader>
        <TopicsStyle>
          <p>YOUR TOPICS</p>
          <div className="scrollbar sc1">
            {followingTag ? (
              followingTag.map((item, key) => {
                return (
                  <div key={key}>
                    <button>{item}</button>
                  </div>
                );
              })
            ) : (
              <p style={{ fontSize: "12px" }}>
                Topics you follow appear here..
              </p>
            )}
          </div>
        </TopicsStyle>

        <FollowingListStyle>
          {followingUser ? (
            followingUser.map((item, key) => {
              return (
                <Tooltip
                  title={<MainFollowingTooltip userId = {item} />}
                  arrow
                  componentsProps={{
                    tooltip: {
                      sx: {
                        backgroundColor: "white",
                      },
                    },
                  }}
                >
                  <FollowingImg src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png" />
                </Tooltip>
              );
            })
          ) : (
            <p style={{ fontSize: "12px", opacity: "0.5" }}>
              users you follow appear here
            </p>
          )}
        </FollowingListStyle>
      </MainHeader>

      <ArticlesStyle>
        <NavLink
          to="following"
          style={({ isActive }) => ({
            borderBottom: isActive ? "3px solid gray" : "",
            padding: isActive ? "1rem" : "",
            opacity: isActive ? "1" : "",
          })}
        >
          Following
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            borderBottom: isActive ? "3px solid gray" : "",
            padding: isActive ? "1rem" : "",
          })}
          to="recommended"
        >
          Recommended
        </NavLink>
      </ArticlesStyle>
      <Outlet />
    </MainContainer>
  );
};

export default UDMain;
