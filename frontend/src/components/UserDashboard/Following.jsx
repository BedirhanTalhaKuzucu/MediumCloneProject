import React from "react";
import ArticleCard from "./ArticleCard";
import {followedUserStories} from "../../helpers/apiRequests"
import { useEffect, useState } from "react";

const Following = () => {

  const [followingStories, setFollowingStories] = useState("")

  useEffect(() => {
    followedUserStories(setFollowingStories)

  }, [])
  

  return (
    <div>
      { followingStories ?
      followingStories.map((item, key) => (
        <ArticleCard key={key} data ={item} />
        )) 
      :
      <h4>LOADİNG</h4>
      }
    </div>
  );
};

export default Following;
