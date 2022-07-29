import React, { useContext, useState, useEffect } from "react";
import * as yup from 'yup';
import { useFormik } from 'formik';
import {getData} from "../helpers/apiRequests"

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
    

   const [data, setData] = useState("")
   const [trendList, setTrendList] = useState("")
   const [userInfo, setUserInfo] = useState("")


   const get_user_info = () => {
    const get_session_user_info = JSON.parse(sessionStorage.getItem("user_info"))
    setUserInfo(get_session_user_info)
   }

  
    useEffect(() => {
        getData(setData, setTrendList)
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
    };
  
    return <AppStateContext.Provider value={value}> {children} </ AppStateContext.Provider>;
  }
  