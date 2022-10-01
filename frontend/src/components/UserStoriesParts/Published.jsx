import React, { useEffect, useState } from "react";
import ArticleCard from "../UserDashboard/ArticleCard";
import { userDetails } from "../../helpers/userProfileInfo";
import { useAuthStates } from "../../contexts/AuthContext";
import Images from "../../assets/Images";
import { UserPageState } from "../../contexts/UserPageContext";

const Published = () => {
  // const [userDetail, setUserDetail] = useState();
  // const { userInfo } = useAuthStates();
  // const userId = userInfo?.userInfo?.profileInfoId;

  // const [userArticle, setUserArticle] = useState();

  const {userArticle, setUserArticle, userDetail, setUserDetail} = UserPageState();


  useEffect(() => {
    // userDetails(setUserDetail, userId, setUserArticle);
    // console.log(userDetail?.user?.user_stories);
  }, []);

  // console.log(userArticle);

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
