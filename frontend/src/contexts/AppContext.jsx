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
//    const getData = () => {
//     let requestOptions = {
//         method: 'GET',
//         redirect: 'follow'
//     };
//     fetch("http://127.0.0.1:8000/blog/posts/", requestOptions)
//     .then(response => response.json())
//     .then(result => {
//         setData(result)
//     })
//     .catch(error => console.log('error', error));
//     }

  
    
  
  
    useEffect(() => {
        getData(setData)
    }, []);
  
    const value = {
        handleShow,
        handleClose,
        show,
        data,
    };
  
    return <AppStateContext.Provider value={value}> {children} </ AppStateContext.Provider>;
  }
  