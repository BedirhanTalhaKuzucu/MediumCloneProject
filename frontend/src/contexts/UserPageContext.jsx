import React, { useContext, useState, useMemo } from "react";


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
    const [offsetSavedArticle, setoffsetSavedArticle] = useState(5);



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
            offsetSavedArticle, 
            setoffsetSavedArticle
        }),
        [followingStories, topics, offsetforFollowing, userDetail, userArticle, savedArticle, offsetSavedArticle]
    );

    return (
        <UserPageContext.Provider value={value}>
            {children}
        </UserPageContext.Provider>
    );
}