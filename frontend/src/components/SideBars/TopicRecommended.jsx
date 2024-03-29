import React, { useEffect, useState, memo } from "react";
import Images from "../../assets/Images";
import { TopicRecommendedFunc } from "../../helpers/tags";
import { TopicListStyle } from "../UserDashboard/styles/UDSideBar.styles";
import { Link } from "react-router-dom";
import { UserPageState } from "../../contexts/UserPageContext";

const TopicRecommended = () => {
  const { topics, setTopics } = UserPageState();

  useEffect(() => {
    if (topics?.length === 0) {
      TopicRecommendedFunc(setTopics);
    }
  }, []);

  return (
    <div>
      <TopicListStyle>
        <h5>Recommended topics</h5>
        <div className="d-flex flex-wrap">
          {topics ? (
            topics?.map((data) => {
              return (
                <div key={data.id} className="topicItem">
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={`/tag/${data.id}`}
                    state={{ detail: data }}
                  >
                    {data.tag_name}
                  </Link>
                </div>
              );
            })
          ) : (
            <img src={Images.loading} alt="loading gif" />
          )}
        </div>
      </TopicListStyle>
    </div>
  );
};

export default memo(TopicRecommended);
