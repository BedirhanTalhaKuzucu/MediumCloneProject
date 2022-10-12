import React, { useEffect, useState, memo } from "react";
import { useAuthStates } from "../../contexts/AuthContext";
import { UserPageState } from "../../contexts/UserPageContext";
import { savedStories } from "../../helpers/userProfileInfo";
import InfiniteScroll from "react-infinite-scroll-component";
import Images from "../../assets/Images";
import SavedArticleCards from "./SavedArticleCards";
const SavedStories = () => {

  const { userInfo } = useAuthStates();
  const { savedArticle, setSavedArticle} = UserPageState();
  const [hasMore, sethasMore] = useState(true);


  useEffect(() => {
    const token = userInfo?.key;
    if (savedArticle?.length === 0) {
      if (token) {
        savedStories(token, setSavedArticle,);
      }
    }
  }, [userInfo]);




  const nextList = () => {
    sethasMore(false)
  }

  return (
    <InfiniteScroll
      dataLength={savedArticle?.length} //This is important field to render the next data
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
      {savedArticle ?
        savedArticle?.map((item, index) => {
          return <SavedArticleCards key={index} data={item}  />;
        })
        :
        ""
      }
    </InfiniteScroll>
  );
};

export default memo(SavedStories);
