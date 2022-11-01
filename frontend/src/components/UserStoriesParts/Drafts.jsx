import React, { memo } from "react";
import ArticleCard from "../UserDashboard/ArticleCard";
import Images from "../../assets/Images";
import { UserPageState } from "../../contexts/UserPageContext";


const Draft = () => {

  const {userArticle, setUserArticle, userDetail, setUserDetail} = UserPageState();

  return (
    <div>
      {userDetail ? (
        userArticle.map((item) => (
          <div key={item.id}>
            {item?.status === "Draft" ? (
              <ArticleCard key={item.id} data={item} />
            ) : null}
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

export default memo(Draft);
