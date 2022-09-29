import React, { useContext, useState, useEffect, useMemo } from "react";


const UserPageContext = React.createContext();

export function UserPageState() {
    return useContext(UserPageContext);
}


export function UserPageStateProvider({ children }) {

    //followingcommopent data
    const [followingStories, setFollowingStories] = useState("");

    const [topics, setTopics] = useState([]);


    const value = useMemo(
        () => ({
            name: "ProviderWithMemo",
            followingStories,
            setFollowingStories,
            topics, 
            setTopics
        }),
        [followingStories, topics]
    );

    return (
        <UserPageContext.Provider value={value}>
            {children}
        </UserPageContext.Provider>
    );
}