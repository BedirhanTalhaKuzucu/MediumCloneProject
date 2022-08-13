import React, { useState } from "react";
import { ClapsRespond, Header, Main } from "./styles/StoryDetailMain.styles";
import Images from "../../assets/Images";
import { Tooltip } from "@mui/material";
import MainFollowingTooltip from "../UserDashboard/MainFollowingTooltip";
import CommentsModal from "./CommentsModal";
// import { useSpeechSynthesis } from "react-speech-kit";

const StoryDetailMain = ({ details }) => {
  // const { speak } = useSpeechSynthesis();
  const [copied, setCopied] = useState(false);
  // console.log(details.id);

  function copyLink() {
    const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);
  }

  return (
    <Main>
      <Header>
        <nav className="authorInf">
          <div>
            <Tooltip
              title={<MainFollowingTooltip creatorInfo={details.creatorInfo} />}
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
                src={details.creatorInfo.user_img}
                alt="yazar profil foto"
                className="AuthorPhoto"
              />
            </Tooltip>
          </div>
          <div>
            <div>
              <h5>
                {" "}
                {details.creatorInfo.first_name +
                  " " +
                  details.creatorInfo.last_name}{" "}
              </h5>
            </div>
            <div className="d-flex fs-6 text-secondary">
              <div className="me-3">{details.publish_date.split("T")[0]} </div>
              <div>3 min read</div>
              {/* <button>
                dinleme çubuğu
              </button> */}
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
        <p>{details.content}</p>
        <ClapsRespond>
          <div className="icon">
            <Tooltip title="Clap" arrow placement="top">
              <img src={Images.clap} alt="claps" />
            </Tooltip>
            <span>{details.clap_count}</span>
          </div>
          <div>|</div>

          <CommentsModal
            commentCounts={details.comment_count}
            comments={details.comments}
            commentID={details.id}
            details={details}
          />
        </ClapsRespond>
      </article>
    </Main>
  );
};

export default StoryDetailMain;
