import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { TopicRecommendedFunc } from "../../helpers/tags";
import { CategoriesStyles } from "./Categories.styles";
import { toast } from "react-hot-toast";
import { useAppState } from "../../contexts/AppContext";

function Categorys() {
  const [topics, setTopics] = useState([]);
  const { userInfo } = useAppState();
  console.log(userInfo);

  useEffect(() => {
    TopicRecommendedFunc(setTopics);
  }, []);

  const HandleButton = () => {
    if (userInfo == "") {
      toast.error("please login first", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

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
                  onClick={HandleButton}
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
