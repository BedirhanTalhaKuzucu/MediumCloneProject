import React, { useEffect, memo } from "react";
import ArticleCard from "./ArticleCard";
import { useState } from "react";
import Images from "../../assets/Images";
import InfiniteScroll from "react-infinite-scroll-component";
import { useAppState } from "../../contexts/AppContext";
import { scroolGetData } from "../../helpers/trendList";

const Recommended = () => {

  const { data, setData, offsetforRecommend, setoffsetforRecommend } = useAppState();
  const [hasMore, sethasMore] = useState(true);

  const nextList = () => {
    if (data?.length !== 0){
      scroolGetData(setData, data, sethasMore, offsetforRecommend, setoffsetforRecommend) 
    }
  }

  return (
    <InfiniteScroll
      dataLength={data.length} //This is important field to render the next data
      next={ nextList }
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
      {data.map((item, index) => {
        return <ArticleCard key={index} data={item} />;
      })}
    </InfiniteScroll>
  );
};

export default memo(Recommended);
