import React, { useContext, useState, useEffect } from "react";


const UserPageContext = React.createContext();

export function UserPageState() {
    return useContext(UserPageContext);
}


export function UserPageStateProvider({ children }) {

    const [followingStories, setFollowingStories] = useState("");
    

    const value = useMemo(
        () => ({
          name: "ProviderWithMemo",
          counter,
          increment: () => setCounter((c) => c + 1)
        }),
        [counter]
      );

    return (
        <UserPageContext.Provider value={value}>
            {children}
        </UserPageContext.Provider>
    );
}