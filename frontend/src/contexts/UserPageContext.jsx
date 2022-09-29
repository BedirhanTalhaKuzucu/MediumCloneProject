import React, { useContext, useState, useEffect, useMemo } from "react";


const UserPageContext = React.createContext();

export function UserPageState() {
    return useContext(UserPageContext);
}


export function UserPageStateProvider({ children }) {

    //followingcommopent data
    const [followingStories, setFollowingStories] = useState("");


    const value = useMemo(
        () => ({
            name: "ProviderWithMemo",
            followingStories,
            setFollowingStories
        }),
        [followingStories]
    );

    return (
        <UserPageContext.Provider value={value}>
            {children}
        </UserPageContext.Provider>
    );
}