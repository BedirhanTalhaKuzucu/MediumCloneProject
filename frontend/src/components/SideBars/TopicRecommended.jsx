import React, { useEffect, useState } from "react";
import Images from "../../assets/Images";
import { TopicRecommendedFunc } from "../../helpers/apiRequests";
import { TopicListStyle } from "../UserDashboard/styles/UDSideBar.styles";
import { Link } from "react-router-dom";

const TopicRecommended = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    TopicRecommendedFunc(setTopics);
  }, []);

  return (
    <div>
      <TopicListStyle>
        <h5>Recommended topics</h5> <br />
        {topics ? (
          topics?.map((data) => {
            return (
              <div key={data.id} className="topicItem">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/tag"
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
      </TopicListStyle>
    </div>
  );
};

export default TopicRecommended;
