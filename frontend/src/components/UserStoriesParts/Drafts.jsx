import React, { useEffect, useState } from "react";
import ArticleCard from "../UserDashboard/ArticleCard";
import { userDetails } from "../../helpers/apiRequests";
import { useAppState } from "../../contexts/AppContext";
import Images from "../../assets/Images";

const Draft = () => {
  const [userDetail, setUserDetail] = useState();
  const { userInfo } = useAppState();
  const userId = userInfo?.userInfo?.profileInfoId;

  const [userArticle, setUserArticle] = useState();

  useEffect(() => {
    userDetails(setUserDetail, userId, setUserArticle);
    // console.log(userDetail?.user?.user_stories);
  }, []);
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

export default Draft;
