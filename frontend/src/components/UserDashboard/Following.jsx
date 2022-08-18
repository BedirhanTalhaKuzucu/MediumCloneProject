import React from "react";
import ArticleCard from "./ArticleCard";
import { followedUserStories } from "../../helpers/apiRequests";
import { useEffect, useState } from "react";
import Images from "../../assets/Images";
import { useAppState } from "../../contexts/AppContext";


const Following = () => {
  // const [followingStories, setFollowingStories] = useState("");
  const { followingStories} = useAppState()


  const getToken = () => {
    const get_session_user_info = JSON.parse(sessionStorage.getItem("user_info"))
    const token = get_session_user_info.key
    return token
  }

  useEffect(() => {
    // const token = getToken()
    // followedUserStories(setFollowingStories, token);
  }, [followingStories]);

  return (
    <div>
      {followingStories ? (
        followingStories.map((item, key) => (
          <ArticleCard key={key} data={item} />
        ))
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={Images.loading} alt="loading gif" />
        </div>
      )}
    </div>
  );
};

export default Following;
