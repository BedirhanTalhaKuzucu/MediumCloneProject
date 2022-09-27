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
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { userDetails } from "../../helpers/apiRequests";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const UDMain = () => {
  // const [followingTag, setFollowingTag] = useState();
  // const [followingUser, setFollowingUser] = useState();
  const [UserDetail, setUserDetail] = useState();
  const [userArticle, setUserArticle] = useState();
  const navigate = useNavigate();

  const getUserId = () => {
    const get_session_user_info = JSON.parse(
      sessionStorage.getItem("user_info")
    );
    const userId = get_session_user_info?.userInfo?.profileInfoId;
    return userId;
  };

  useEffect(() => {
    const userId = getUserId();
    userDetails(setUserDetail, userId, setUserArticle);
  }, []);

  return (
    <MainContainer id="pageTop">
      <MainHeader>
        <TopicsStyle>
          <p>YOUR TOPICS</p>
          <div className="scrollbar sc1">
            {UserDetail ? (
              UserDetail?.user?.followed_topics.map((item, key) => {
                return (
                  <div key={key}>
                    <button onClick={() => navigate("/tag")}>{item}</button>
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
          {UserDetail ? (
            UserDetail?.user.followed_user.map((item, key) => {
              return (
                <Tooltip
                  title={<MainFollowingTooltip followedInfo={item} />}
                  arrow
                  componentsProps={{
                    tooltip: {
                      sx: {
                        backgroundColor: "white",
                      },
                    },
                  }}
                  key={key}
                >
                  <FollowingImg src={item.followedDetails.image} />
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
      <ScrollToTop />
    </MainContainer>
  );
};

export default UDMain;
