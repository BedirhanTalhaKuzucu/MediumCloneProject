import React, { useContext, useState, useEffect } from "react";
import * as yup from 'yup';
import { useFormik } from 'formik';
import {getData, UserFollowFunc, followedUserStories, settingUserInfo} from "../helpers/apiRequests"

const AppStateContext = React.createContext();

export function useAppState() {
    return useContext(AppStateContext);
}

export function AppStateProvider({ children }) {

    //for sigup page
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    //for sigup page
    const [logInShow, setLogInShow] = useState(false);
    

    //followingcommopent data
    const [followingStories, setFollowingStories] = useState("");

    //whotofollow data
    const [users, setUsers] = useState([]);


    const [data, setData] = useState("")
    const [trendList, setTrendList] = useState("")
    const [userInfo, setUserInfo] = useState("")

    //setting page user data
    const [settingPageInfo, setsettingPageInfo] = useState()


    const get_user_info = () => {
        const get_session_user_info = JSON.parse(sessionStorage.getItem("user_info"))
        setUserInfo(get_session_user_info)
   }

   const getToken = () => {
        const get_session_user_info = JSON.parse(sessionStorage.getItem("user_info"))
        const token = get_session_user_info.key
        return token
    }
   

  
    useEffect(() => {
        getData(setData, setTrendList)
        UserFollowFunc(setUsers);
        const get_session_user_info = JSON.parse(sessionStorage.getItem("user_info"))
        if (get_session_user_info) {
            const token = get_session_user_info.key
            const userId = get_session_user_info.userInfo.userId
            followedUserStories(setFollowingStories, token)
            settingUserInfo(setsettingPageInfo, token, userId)
        }
    }, []);
  
    const value = {
        handleShow,
        handleClose,
        show,
        data,
        trendList,
        userInfo,
        get_user_info,
        logInShow,
        setLogInShow,
        setFollowingStories, followingStories,
        getToken,
        users,
        settingPageInfo, setsettingPageInfo
    };
  
    return <AppStateContext.Provider value={value}> {children} </ AppStateContext.Provider>;
  }
  