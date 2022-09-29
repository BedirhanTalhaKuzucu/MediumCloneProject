import React, { useContext, useState, useEffect, useMemo  } from "react";
import { settingUserInfo } from "../helpers/userProfileInfo";
import { followedUserStories, UserFollowFunc } from "../helpers/stories";
import { getData } from "../helpers/trendList";

const AppStateContext = React.createContext();

export function useAppState() {
  return useContext(AppStateContext);
}

export function AppStateProvider({ children }) {
  

  //whotofollow data
  const [users, setUsers] = useState([]);

  const [data, setData] = useState("");
  const [trendList, setTrendList] = useState("");

  //setting page user data
  const [settingPageInfo, setsettingPageInfo] = useState();

  

  const getToken = () => {
    const get_session_user_info = JSON.parse(
      sessionStorage.getItem("user_info")
    );
    const token = get_session_user_info?.key;
    return token;
  };

  useEffect(() => {
    console.log("denemeeeeeeeeeeeeeee")
    getData(setData, setTrendList);
    UserFollowFunc(setUsers);
    const get_session_user_info = JSON.parse(
      sessionStorage.getItem("user_info")
    );
    if (get_session_user_info) {
      const token = get_session_user_info?.key;
      const userId = get_session_user_info?.userInfo?.userId;
      // followedUserStories(setFollowingStories, token);
      settingUserInfo(setsettingPageInfo, token, userId);
    }
  }, []);


  const value = useMemo(
    () => ({
      data,
      setData,
      trendList,
      getToken,
      users,
      settingPageInfo,
      setsettingPageInfo,
    }),
    [data, users, settingPageInfo ]
);  

  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
}
