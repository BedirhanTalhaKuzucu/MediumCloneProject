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
import { userDetails } from "../../helpers/apiRequests"

const topicList = [
  "FullStack",
  "Python",
  "Machine Learning",
  "Programming",
  "React",
  "Django",
];

const UDMain = () => {

  const [followingTag, setFollowingTag] = useState()
  const [followingUser, setFollowingUser] = useState()


  useEffect(() => {

    userDetails(setFollowingTag, setFollowingUser)
  
  }, [])


  return (
    <MainContainer>
      <MainHeader>
        <TopicsStyle>
          <p>YOUR TOPICS</p>
          <div className="scrollbar sc1">
            {followingTag ?
              followingTag.map((item, key) => {
                return (
                  <div key={key}>
                    <button>{item}</button>
                  </div>
                );
              })
              :
              "There are no topics you follow"
            }
          </div>
        </TopicsStyle>

        <FollowingListStyle>
          {followingUser ?
            followingUser.map((item, key) => {
              return (
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
                  <FollowingImg src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png" />
                </Tooltip>
              );
            })
            :
            "There are no users you follow"}
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
