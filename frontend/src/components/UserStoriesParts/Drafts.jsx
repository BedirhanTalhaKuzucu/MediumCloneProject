import React, { useEffect, useState } from "react";
import ArticleCard from "../UserDashboard/ArticleCard";
import { userDetails } from "../../helpers/apiRequests";
import { useAppState } from "../../contexts/AppContext";
import Images from "../../assets/Images";

const Draft = () => {
  const [userDetail, setUserDetail] = useState();
  const { userInfo } = useAppState();
  const userId = userInfo?.userInfo?.profileInfoId;

  useEffect(() => {
    userDetails(setUserDetail, userId);
    // console.log(userDetail?.user?.user_stories);
  }, []);

  return (
    <div>
      {userDetail ? (
        userDetail.user.user_stories.map((item, key) => (
          <div>
            {item?.status === "Draft" ? (
              <ArticleCard key={key} data={item} />
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
