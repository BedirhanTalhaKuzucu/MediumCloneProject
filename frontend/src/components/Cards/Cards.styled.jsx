import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { CardStyled, StyledProfilImage } from "../Sidebar/Sidebar.styled";

const CardComp = ({ className, blog }) => {
  return (
    <CardStyled className={className}>
      <div className="col-md-8 cardText">
        <div className="card-body">
          <div className="card-title">
            <StyledProfilImage blogCard={blog} />
            {blog.creatorInfo.first_name} {blog.creatorInfo.last_name}
          </div>
          <p className="card-text card-content">{blog.title} </p>
          <p className="card-text">
            <small className="text-muted">
              {blog.publish_date.split("T")[0]}{" "}
            </small>
            <small className="text-muted px-3">
              {blog.tags
                ? blog.tags.map((tag) => (
                    <Button variant="light" size="sm">
                      {" "}
                      {tag.tag_name}{" "}
                    </Button>
                  ))
                : ""}
            </small>
          </p>
        </div>
      </div>
      <div className="col-md-4 image">
        <img src={blog.image} className="card-img " alt="blogImg" />
      </div>
    </CardStyled>
  );
};

export const StyledCard = styled(CardComp)``;
