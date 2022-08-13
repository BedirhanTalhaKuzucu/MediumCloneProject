import React from "react";
import { useLocation } from "react-router-dom";
import Images from "../../assets/Images";
import ArticleCard from "../UserDashboard/ArticleCard";
import { MainStyle } from "./styles/TagDetailMain.styles";

const TagDetailMain = () => {
  let data = useLocation();
  data = data.state.detail;
  console.log(data);
  return (
    <MainStyle>
      <header>
        <div className="title">
          <img src={Images.tag} alt="" />
          <h1>{data.tag_name}</h1>
        </div>
        <div>
          <button className="btn btn-outline-success">following</button>
          <button className="btn btn-outline-success">start writing</button>
        </div>
        <hr />
      </header>
      {/* <ArticleCard /> */}
    </MainStyle>
  );
};

export default TagDetailMain;
