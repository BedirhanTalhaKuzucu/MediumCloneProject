import { Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Images from "../../assets/Images";
import { commentCreateFunc } from "../../helpers/apiRequests";
import {
  CommentsStyles,
  ModalStyles,
  OpenButtonStyle,
} from "./styles/CommentsModel.styles";

function CommentsModal({ commentCounts, comments, commentID, details }) {
  const [show, setShow] = useState(false);

  const [newComment, setNewComment] = useState([]);

  useEffect(() => {}, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const commentCreate = () => {
    commentCreateFunc(setNewComment);
    console.log("başarılı", newComment);
  };

  return (
    <>
      <OpenButtonStyle onClick={handleShow}>
        <Tooltip title="Respond" arrow placement="top">
          <img src={Images.chat} alt="chat" className="" />
        </Tooltip>

        <span> {commentCounts ? commentCounts : ""} </span>
      </OpenButtonStyle>
      <Modal
        show={show}
        onHide={handleClose}
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <CommentsStyles>
          <Modal.Header closeButton>
            <Modal.Title>Responses ( {commentCounts} )</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form action="#">
              <textarea
                name=""
                id=""
                cols="50"
                rows="3"
                placeholder="What are your thoughts?"
              ></textarea>

              <div className="buttons">
                <button type="reset" className="resetButton">
                  Cancel
                </button>
                <button
                  type="submit"
                  onClick={() => commentCreate()}
                  className="submitButton btn btn-success"
                >
                  Respond
                </button>
              </div>
            </form>

            <hr />

            {comments &&
              comments.map((item, index) => (
                <div className="comments" key={index}>
                  <div className="userInfo">
                    <div>
                      <img
                        src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
                        alt="user-profile-pic"
                      />
                    </div>
                    <div>
                      <div className="username">{item.user}</div>
                      <div className="timeStamp">
                        {item.days_since_joined} days ago
                      </div>
                    </div>
                  </div>

                  <div className="content">{item.content}</div>
                  <div className="claps">
                    <Tooltip title="Clap" arrow placement="top">
                      <img src={Images.clap} alt="claps" />
                    </Tooltip>
                    <span> {item.clap_comment_count} </span>
                  </div>
                  <hr />
                </div>
              ))}
          </Modal.Body>
        </CommentsStyles>
      </Modal>
    </>
  );
}

export default CommentsModal;
