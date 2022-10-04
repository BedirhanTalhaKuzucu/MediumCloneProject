import React, { useContext, useState, useEffect, useMemo } from "react";


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
            setUserArticle
        }),
        [followingStories, topics, offsetforFollowing, userDetail, userArticle, ]
    );

    return (
        <UserPageContext.Provider value={value}>
            {children}
        </UserPageContext.Provider>
    );
}