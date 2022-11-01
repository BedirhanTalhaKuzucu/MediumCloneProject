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

  const [data, setData] = useState([]);
  const [trendList, setTrendList] = useState("");
  const [offsetforRecommend, setoffsetforRecommend] = useState(5)


  //setting page user data
  const [settingPageInfo, setsettingPageInfo] = useState();

  

 

  useEffect(() => {
    console.log("app")
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
      users,
      settingPageInfo,
      setsettingPageInfo,
      offsetforRecommend,
      setoffsetforRecommend
    }),
    [data, users, settingPageInfo, offsetforRecommend ]
);  

  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
}
