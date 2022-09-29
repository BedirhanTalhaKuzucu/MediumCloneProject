import React, { useContext, useState, useEffect } from "react";
import { settingUserInfo } from "../helpers/userProfileInfo";
import { followedUserStories, UserFollowFunc } from "../helpers/stories";
import { getData } from "../helpers/trendList";

const AppStateContext = React.createContext();

export function useAppState() {
  return useContext(AppStateContext);
}

export function AppStateProvider({ children }) {
  //followingcommopent data
  const [followingStories, setFollowingStories] = useState("");

  //whotofollow data
  const [users, setUsers] = useState([]);

  const [data, setData] = useState("");
  const [trendList, setTrendList] = useState("");
  const [userInfo, setUserInfo] = useState("");

  //setting page user data
  const [settingPageInfo, setsettingPageInfo] = useState();

  const get_user_info = () => {
    const get_session_user_info = JSON.parse(
      sessionStorage.getItem("user_info")
    );
    setUserInfo(get_session_user_info);
  };

  const getToken = () => {
    const get_session_user_info = JSON.parse(
      sessionStorage.getItem("user_info")
    );
    const token = get_session_user_info?.key;
    return token;
  };

  useEffect(() => {
    getData(setData, setTrendList);
    UserFollowFunc(setUsers);
    const get_session_user_info = JSON.parse(
      sessionStorage.getItem("user_info")
    );
    if (get_session_user_info) {
      const token = get_session_user_info?.key;
      const userId = get_session_user_info?.userInfo?.userId;
      // followedUserStories(setFollowingStories, token);
      console.log("app context kaç kere çalışacak acabaaaaaaaaaaaaaaaaaaa")
      settingUserInfo(setsettingPageInfo, token, userId);
    }
  }, []);

  const value = {
    data,
    trendList,
    userInfo,
    get_user_info,
    setFollowingStories,
    followingStories,
    getToken,
    users,
    settingPageInfo,
    setsettingPageInfo,
  };

  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
}
