import React, { useContext, useState, useEffect } from "react";


const AuthContext = React.createContext();

export function useAuthStates() {
    return useContext(AuthContext);
}


export function AuthStateProvider({ children }) {

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
    }



    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}