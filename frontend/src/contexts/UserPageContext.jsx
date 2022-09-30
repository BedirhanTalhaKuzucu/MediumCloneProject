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


    const value = useMemo(
        () => ({
            name: "ProviderWithMemo",
            followingStories,
            setFollowingStories,
            offsetforFollowing,
            setoffsetforFollowing,
            topics, 
            setTopics
        }),
        [followingStories, topics, offsetforFollowing]
    );

    return (
        <UserPageContext.Provider value={value}>
            {children}
        </UserPageContext.Provider>
    );
}