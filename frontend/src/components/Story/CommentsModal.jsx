import { Tooltip } from "@mui/material";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Images from "../../assets/Images";
import {
  CommentsStyles,
  ModalStyles,
  OpenButtonStyle,
} from "./styles/CommentsModel.styles";

function CommentsModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <OpenButtonStyle onClick={handleShow}>
        <Tooltip title="Respond" arrow placement="top">
          <img src={Images.chat} alt="chat" className="" />
        </Tooltip>

        <span>10</span>
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
            <Modal.Title>Responses (7)</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form action="">
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
                <button type="submit" className="submitButton btn btn-success">
                  Respond
                </button>
              </div>
            </form>

            <hr />

            <div className="comments">
              <div className="userInfo">
                <div>
                  <img
                    src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
                    alt="user-profile-pic"
                  />
                </div>
                <div>
                  <div className="username">User Name</div>
                  <div className="timeStamp">3 days ago</div>
                </div>
              </div>

              <div className="content">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
                culpa commodi consectetur rem quam magnam sapiente mollitia
                distinctio voluptatem similique.
              </div>
              <div className="claps">
                <Tooltip title="Clap" arrow placement="top">
                  <img src={Images.clap} alt="claps" />
                </Tooltip>
                <span>2</span>
              </div>
            </div>

            <hr />
          </Modal.Body>
        </CommentsStyles>
      </Modal>
    </>
  );
}

export default CommentsModal;
