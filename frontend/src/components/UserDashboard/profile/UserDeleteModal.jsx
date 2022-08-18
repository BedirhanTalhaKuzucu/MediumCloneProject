import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { ModalStyle } from "../styles/profile/PasswordChangeModal.style";
import { useNavigate } from "react-router-dom";
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
  const [values, setValues] = useState({});
  const navigate = useNavigate();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  //delete account

  const deleteUser = async () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Token f6fd2cd183916a329ab23c9b5599265662dc350b"
    );
    myHeaders.append(
      "Cookie",
      "csrftoken=mhsVqsCpf1A01i0bMgwskqORFNu3bQlvawfLBOkYNwjA0CZBSaW0ZA4SAYg5rQNP"
    );

    var raw = "";

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:8000/auth/users/22", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  //   useEffect(() => {}, []);

  const handleFormSubmit = () => {
    console.log("tamam");
    deleteUser();
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
