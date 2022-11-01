import React, { memo } from "react";
import ArticleCard from "../UserDashboard/ArticleCard";
import Images from "../../assets/Images";



const StoryCard = ({storiesDetail}) => {


  return (
    <div>
      {storiesDetail ? (
        storiesDetail.map((item) => (
          <div key={item.id}>
            {/* {item?.status === "Published" ? ( */}
              <ArticleCard key={item.id} data={item} />
            {/* ) : null} */}
          </div>
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

export default memo(StoryCard);
