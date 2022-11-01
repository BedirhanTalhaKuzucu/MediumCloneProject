import React, { useContext, useState, useMemo, useEffect } from "react";
import { savedStories } from "../helpers/userProfileInfo";

const UserPageContext = React.createContext();

export function UserPageState() {
    return useContext(UserPageContext);
}


export function UserPageStateProvider({ children }) {

    //followingcommopent data
    const [followingStories, setFollowingStories] = useState("");
    const [offsetforFollowing, setoffsetforFollowing] = useState(5)


    const [topics, setTopics] = useState([]);

    const [userDetail, setUserDetail] = useState();
    const [userArticle, setUserArticle] = useState();
    const [savedArticle, setSavedArticle] = useState([]);

    useEffect(() => {
        if (savedArticle.length === 0) {
            const get_session_user_info = JSON.parse( sessionStorage.getItem("user_info"));
            if (get_session_user_info) {
                const token = get_session_user_info?.key;
                savedStories(token, setSavedArticle);
            } }
        
    }, [])
    



    const value = useMemo(
        () => ({
            name: "ProviderWithMemo",
            followingStories,
            setFollowingStories,
            offsetforFollowing,
            setoffsetforFollowing,
            topics, 
            setTopics,
            userDetail, 
            setUserDetail,
            userArticle, 
            setUserArticle,
            savedArticle, 
            setSavedArticle,
            
        }),
        [followingStories, topics, offsetforFollowing, userDetail, userArticle, savedArticle]
    );

    return (
        <UserPageContext.Provider value={value}>
            {children}
        </UserPageContext.Provider>
    );
}