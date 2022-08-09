import React from "react";
import ArticleCard from "./ArticleCard";
import { followedUserStories } from "../../helpers/apiRequests";
import { useEffect, useState } from "react";
import Images from "../../assets/Images";

const Following = () => {
  const [followingStories, setFollowingStories] = useState("");

  useEffect(() => {
    followedUserStories(setFollowingStories);
  }, []);

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
