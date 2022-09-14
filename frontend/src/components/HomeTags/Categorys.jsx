import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { TopicRecommendedFunc } from "../../helpers/apiRequests";
import { CategoriesStyles } from "./Categories.styles";

function Categorys() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    TopicRecommendedFunc(setTopics);
  }, []);

  return (
    <CategoriesStyles>
      <h6>DISCOVER MORE OF WHAT MATTERS TO YOU</h6>
      <div className="topics">
        {topics &&
          topics?.map((data) => {
            return (
              <div key={data.id} className="topicItem">
                <Button
                  variant="outline-secondary"
                  // style={{ textDecoration: "none", color: "black" }}
                  // to={`/tag/${data.id}`}
                  // state={{ detail: data }}
                >
                  {data.tag_name}
                </Button>
              </div>
            );
          })}
      </div>
    </CategoriesStyles>
  );
}

export default Categorys;
