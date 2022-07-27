import React from "react";
import { CardContainer } from "./styles/Following.styles";
import Images from "../../assets/Images";
import { Link } from "react-router-dom";

const ArticleCard = () => {
  return (
    <CardContainer>
      <section className="authorInf">
        <img
          src="https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg"
          alt=""
          className="pic"
        />
        <div className="fullName">Full Name</div>
        <div className="createdDate">Jun 6</div>
      </section>

      <section className="articleInf">
        <nav className="part1">
          <Link to="/story" className="title">
            Best Projects for Your Portfolio
          </Link>
          <div className="articlePart">
            You can build these projects within a week. — Software engineering
            is often intimidating, especially when there is a lot to learn and
            projects to develop. What’s virtually impossible is when you’re just
            starting and there...
          </div>
          <div className="specialDetail">
            <div>
              <div className="tag">Portfolio</div>
              <div className="readTime">4 min read</div>
              <div className="desc">Based on your reading history</div>
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
            src="https://miro.medium.com/fit/c/176/176/0*yIJHqQwuaQkWYN84"
            alt=""
          />
        </nav>
      </section>
    </CardContainer>
  );
};

export default ArticleCard;
