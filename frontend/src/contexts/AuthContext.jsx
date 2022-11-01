import React, { useContext, useState, useEffect } from "react";

const AuthContext = React.createContext();

export function useAuthStates() {
  return useContext(AuthContext);
}

export function AuthStateProvider({ children }) {
  const [userInfo, setUserInfo] = useState("");
  const [activate, setActivate] = useState(false);

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
    get_user_info();
    let token = getToken();
  }, []);

  //for signUp page
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  //for signUp page
  const [logInShow, setLogInShow] = useState(false);

  const value = {
    handleShow,
    handleClose,
    show,
    logInShow,
    setLogInShow,
    userInfo,
    get_user_info,
    getToken,
    activate,
    setActivate,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
