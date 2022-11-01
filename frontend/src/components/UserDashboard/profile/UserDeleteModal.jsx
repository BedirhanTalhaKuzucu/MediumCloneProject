import React, { useState } from "react";
import Modal from "react-modal";
import { ModalStyle } from "../styles/profile/PasswordChangeModal.style";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../../../contexts/AppContext";
import { useAuthStates } from "../../../contexts/AuthContext";
import { userProfileDelete } from "../../../helpers/userProfileInfo";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function UserDeleteModal() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const { settingPageInfo } = useAppState();
  const { userInfo } = useAuthStates();

  const userId = userInfo.userInfo.profileInfoId;
  const Token = userInfo.key;

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleFormSubmit = () => {
    userProfileDelete(Token, settingPageInfo, userId);
    navigate("/");
    alert("Your account has been successfully deleted.");
  };

  return (
    <div>
      <a href="#" onClick={openModal}>
        Delete account
      </a>
      <ModalStyle>
        <Modal
          isOpen={modalIsOpen}
          //   onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          ariaHideApp={false}
          // closeTimeoutMS={200}
        >
          <div className="d-flex justify-content-end align-items-center mb-3 ">
            {/* <h4> New Password</h4> */}
            <button
              type="button"
              class="btn-close"
              aria-label="Close"
              onClick={closeModal}
            ></button>
          </div>
          <form onSubmit={() => handleFormSubmit()}>
            <p>Are you sure you want to permanently delete your account?</p>
            <button type="submit" class="btn btn-danger w-100 mt-2">
              Delete Account
            </button>
          </form>
        </Modal>
      </ModalStyle>
    </div>
  );
}

export default UserDeleteModal;
