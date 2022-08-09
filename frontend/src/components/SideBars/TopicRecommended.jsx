import React, { useEffect, useState } from "react";
import Images from "../../assets/Images";
import { TopicRecommendedFunc } from "../../helpers/apiRequests";
import { TopicListStyle } from "../UserDashboard/styles/UDSideBar.styles";

const TopicRecommended = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    TopicRecommendedFunc(setTopics);
  }, []);

  return (
    <div>
      <TopicListStyle>
        <h5>Recommended topics</h5>
        {topics ? (
          topics?.map((item) => {
            return (
              <div key={item.id} className="topicItem">
                <button>{item.tag_name}</button>
              </div>
            );
          })
        ) : (
          <img src={Images.loading} alt="loading gif" />
        )}
      </TopicListStyle>
    </div>
  );
};

export default TopicRecommended;
