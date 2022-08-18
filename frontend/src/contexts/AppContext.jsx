import React, { useContext, useState, useEffect } from "react";
import * as yup from 'yup';
import { useFormik } from 'formik';
import {getData, UserFollowFunc, followedUserStories} from "../helpers/apiRequests"

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
        let token = getToken()
        if (token) {
            followedUserStories(setFollowingStories, token)
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
    };
  
    return <AppStateContext.Provider value={value}> {children} </ AppStateContext.Provider>;
  }
  