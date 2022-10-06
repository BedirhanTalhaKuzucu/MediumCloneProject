import React from "react";
import ArticleCard from "./ArticleCard";
import { useEffect, useState, memo  } from "react";
import Images from "../../assets/Images";
import InfiniteScroll from "react-infinite-scroll-component";
import { followedUserStories } from "../../helpers/stories";
import { UserPageState } from "../../contexts/UserPageContext";
import { useAuthStates } from "../../contexts/AuthContext";

const Following = () => {


  const [hasMore, sethasMore] = useState(true);
  const [TOKEN, setTOKEN] = useState()

  const { followingStories, setFollowingStories, offsetforFollowing, setoffsetforFollowing } = UserPageState();
  const { getToken } = useAuthStates();



  useEffect(() => {

    const token = getToken()
    setTOKEN(token)

    if (followingStories?.length === 0) {
      setoffsetforFollowing(5)
      if (token) {
        followedUserStories(setFollowingStories, token, undefined, undefined, undefined, sethasMore )
      }
    }

  }, []);

  const nextList = () => {
    if (TOKEN) {
      followedUserStories(setFollowingStories, TOKEN, offsetforFollowing, followingStories, setoffsetforFollowing, sethasMore)
    }
  }


  return (
    <InfiniteScroll
      dataLength={followingStories?.length} //This is important field to render the next data
      next={() => { nextList() }}
      hasMore={hasMore}
      loader={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={Images.loading} alt="loading gif" />
        </div>
      }
      endMessage={<b>There are no more articles to show here..</b>}
    >
      {followingStories ?
        followingStories?.map((item, index) => {
          return <ArticleCard key={index} data={item} />;
        })
        :
        ""
      }
    </InfiniteScroll>
  );
};

export default memo(Following);
