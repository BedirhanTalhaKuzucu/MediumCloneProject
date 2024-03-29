import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { TopicRecommendedFunc } from "../../helpers/tags";
import { CategoriesStyles } from "./Categories.styles";
import { toast } from "react-hot-toast";
import { useAuthStates } from "../../contexts/AuthContext";
import { UserPageState } from "../../contexts/UserPageContext";


function Categorys() {
  // const [topics, setTopics] = useState([]);
  const { userInfo } = useAuthStates();
  const { topics, setTopics } = UserPageState();


  useEffect(() => {
    TopicRecommendedFunc(setTopics);
  }, []);

  const HandleButton = () => {
    if (userInfo === "") {
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
