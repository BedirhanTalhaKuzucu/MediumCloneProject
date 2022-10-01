import React, { useEffect, useState } from "react";
import ArticleCard from "../UserDashboard/ArticleCard";
import { userDetails } from "../../helpers/userProfileInfo";
import { useAuthStates } from "../../contexts/AuthContext";
import Images from "../../assets/Images";
import { UserPageState } from "../../contexts/UserPageContext";

const Published = () => {
  
  const {userArticle, setUserArticle, userDetail, setUserDetail} = UserPageState();

  return (
    <div>
      {userDetail ? (
        userArticle.map((item) => (
          <div key={item.id}>
            {item?.status === "Published" ? (
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

export default Published;
