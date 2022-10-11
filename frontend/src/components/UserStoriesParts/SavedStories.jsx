import React, { useEffect, useState, memo } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStates } from "../../contexts/AuthContext";
import { UserPageState } from "../../contexts/UserPageContext";
import { savedStories } from "../../helpers/userProfileInfo";
import { SavedStyles } from "./styles/SavedStories.styles";
import InfiniteScroll from "react-infinite-scroll-component";
import Images from "../../assets/Images";
import ArticleCard from "../UserDashboard/ArticleCard";
import SavedArticleCards from "./SavedArticleCards";
const SavedStories = () => {

  const { userInfo } = useAuthStates();
  const { savedArticle, setSavedArticle, offsetSavedArticle, setoffsetSavedArticle } = UserPageState();
  const [hasMore, sethasMore] = useState(true);


  useEffect(() => {
    const token = userInfo?.key;
    if (token) {
      savedStories(token, setSavedArticle );
    }
  }, [userInfo]);

  console.log(savedArticle)

  const navigate = useNavigate();

  const nextList = () => {
    const token = userInfo?.key;

    if (token) {
      savedStories(token, setSavedArticle, savedArticle, offsetSavedArticle, setoffsetSavedArticle,  sethasMore)
    }
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
          return <SavedArticleCards key={index} data={item} />;
        })
        :
        ""
      }
    </InfiniteScroll>
  );
};

export default memo(SavedStories);
