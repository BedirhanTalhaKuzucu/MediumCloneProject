import React from "react";
import { CardContainer } from "./styles/Following.styles";
import Images from "../../assets/Images";
import { Link } from "react-router-dom";

const ArticleCard = ({data}) => {
  return (
    <CardContainer>
      <section className="authorInf">
        <img
          src={data.creatorInfo.user_img}
          alt=""
          className="pic"
        />
        <div className="fullName"> {data.creatorInfo.first_name} {data.creatorInfo.last_name} </div>
        <div className="createdDate">{data.publish_date.split('T')[0]} </div>
      </section>

      <section className="articleInf">
        <nav className="part1">
          <Link to="/story" className="title">
            {data.title}
          </Link>
          <div className="articlePart">
            {data.content}
          </div>
          <div className="specialDetail">
            <div>
              <div className="tag">Portfolio</div>
              <div className="readTime">4 min read</div>
              <div className="desc">Based on your following</div>
            </div>
            <div className="icons">
              <img src={Images.bookmarks} alt="icon" />
              <img src={Images.noentry} alt="icon" />
              <img src={Images.more} alt="icon" />
              <div></div>
              <div></div>
            </div>
          </div>
        </nav>
        <nav className="part2">
          <img
            src={data.image}
            alt=""
          />
        </nav>
      </section>
    </CardContainer>
  );
};

export default ArticleCard;
