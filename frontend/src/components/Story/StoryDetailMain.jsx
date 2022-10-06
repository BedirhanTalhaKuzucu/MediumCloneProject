import React, { useState, useEffect, useRef } from "react";
import { ClapsRespond, Header, Main } from "./styles/StoryDetailMain.styles";
import Images from "../../assets/Images";
import { Tooltip } from "@mui/material";
import MainFollowingTooltip from "../UserDashboard/MainFollowingTooltip";
import CommentsModal from "./CommentsModal";
import { Helmet } from "react-helmet";
import { useAuthStates } from "../../contexts/AuthContext";
import { storyDeleteFunc } from "../../helpers/stories";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const StoryDetailMain = ({ detaylar }) => {
  const [copied, setCopied] = useState(false);
  const { userInfo } = useAuthStates();
  const navigate = useNavigate();

  const tokenKey = userInfo?.key;
  const storyId = detaylar?.id;

  const userId = userInfo?.userInfo?.profileInfoId;
  const storyCreaterId = detaylar?.creatorInfo?.userId;
  // console.log(userId, storyCreaterId);

  const copyLink = () => {
    const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);
  };

  useEffect(() => {}, [detaylar?.comments]);

  const handleArticleDelete = () => {
    storyDeleteFunc(tokenKey, storyId);
    toast.success("Story successfully deleted!");
    navigate("/me/stories");
  };
  const handleArticleUpdate = () => {};

  return (
    <Main>
      <Helmet>
        <title>{detaylar?.title}</title>
      </Helmet>
      <Header>
        <nav className="authorInf">
          <div>
            <Tooltip
              title={
                <MainFollowingTooltip
                  creatorInfo={detaylar ? detaylar.creatorInfo : ""}
                />
              }
              arrow
              componentsProps={{
                tooltip: {
                  sx: {
                    backgroundColor: "white",
                  },
                },
              }}
            >
              <img
                src={detaylar ? detaylar.creatorInfo.user_img : ""}
                alt="yazar profil foto"
                className="AuthorPhoto"
              />
            </Tooltip>
          </div>
          <div>
            <div>
              <h5>
                {detaylar
                  ? detaylar.creatorInfo.first_name +
                    " " +
                    detaylar.creatorInfo.last_name
                  : " "}
              </h5>
            </div>
            <div className="d-flex fs-6 text-secondary">
              <div className="me-3">
                {detaylar ? detaylar.publish_date.split("T")[0] : " "}{" "}
              </div>
              <div>3 min read</div>
            </div>
          </div>
        </nav>

        <nav className="icons">
          <Tooltip
            title={!copied ? "Copy link" : "Copied!"}
            arrow
            placement="bottom"
          >
            <img src={Images.copylink} alt="copy link" onClick={copyLink} />
          </Tooltip>
          <Tooltip title="Send an e-mail" arrow placement="bottom">
            <img src={Images.email} alt="mail gönder" />
          </Tooltip>
          <Tooltip title="Save" arrow placement="bottom">
            <img src={Images.bookmarks} alt="makaleyi kaydet" />
          </Tooltip>
        </nav>
      </Header>
      <article className="my-5">
        {detaylar ? (
          <div dangerouslySetInnerHTML={{ __html: detaylar.content }} />
        ) : (
          ""
        )}

        {storyCreaterId === userId ? (
          <div className="buttons mt-5 mb-5 d-flex  justify-content-around">
            <button
              className="btn btn-outline-danger"
              onClick={handleArticleDelete}
            >
              Delete
            </button>
            <button
              className="btn btn-outline-info"
              onClick={handleArticleUpdate}
            >
              Update
            </button>
          </div>
        ) : (
          ""
        )}

        <ClapsRespond>
          <div className="icon">
            <Tooltip title="Clap" arrow placement="top">
              <img src={Images.clap} alt="claps" />
            </Tooltip>
            <span>{detaylar ? detaylar.clap_count : ""}</span>
          </div>
          <div>|</div>

          <CommentsModal
            commentCounts={detaylar ? detaylar.comment_count : ""}
            comments={detaylar ? detaylar.comments : ""}
            commentID={detaylar ? detaylar.id : ""}
            details={detaylar ? detaylar : ""}
          />
        </ClapsRespond>
      </article>
    </Main>
  );
};

export default StoryDetailMain;
