import React, { useContext, useState, useEffect } from "react";
import * as yup from 'yup';
import { useFormik } from 'formik';
import {getData} from "../helpers/apiRequests"

const AppStateContext = React.createContext();

export function useAppState() {
    return useContext(AppStateContext);
}

export function AppStateProvider({ children }) {

   const [show, setShow] = useState(false);
   const handleShow = () => setShow(true);
   const handleClose = () => setShow(false);

   const [data, setData] = useState("")
   const [userInfo, setUserInfo] = useState("")
  
    useEffect(() => {
        getData(setData)
    }, []);
  
    const value = {
        handleShow,
        handleClose,
        show,
        data,
        setUserInfo,
        userInfo,
    };
  
    return <AppStateContext.Provider value={value}> {children} </ AppStateContext.Provider>;
  }
  