import React, { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import { IconButton, Input } from "@mui/material";
import Modal from "react-modal";
import { ModalStyle } from "../styles/profile/PasswordChangeModal.style";
import { changePasswordFunc } from "../../../helpers/apiRequests";
import { useAppState } from "../../../contexts/AppContext";
import { useRef } from "react";
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

function PasswordChangeModal() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [values, setValues] = useState({
    password1: "",
    password2: "",
    showPassword1: false,
    showPassword2: false,
  });

  const { userInfo } = useAppState();
  const Token = userInfo?.key;
  // console.log(typeof Token);

  const ref1 = useRef();
  const ref2 = useRef();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword1 = () => {
    setValues({
      ...values,
      showPassword1: !values.showPassword1,
    });
  };
  const handleClickShowPassword2 = () => {
    setValues({
      ...values,
      showPassword2: !values.showPassword2,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (values.password1 === values.password2) {
      console.log("password match");
      setValues({
        password1: ref1.current.value,
        password2: ref1.current.value,
        ...values,
      });
      console.log(values);
      changePasswordFunc(values, Token);
      closeModal();
    } else {
      alert("password not match");
    }
  };

  return (
    <div>
      <button onClick={openModal} className="btn">
        Edit
      </button>
      <ModalStyle>
        <Modal
          isOpen={modalIsOpen}
          // onAfterOpen={afterOpenModal}
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
          <form onSubmit={(e) => handleFormSubmit(e)}>
            <div class="form-outline mb-4">
              <label
                htmlFor="standard-adornment-password"
                className="d-block mb-1"
              >
                new password
              </label>
              <Input
                id="standard-adornment-password"
                type={values.showPassword1 ? "text" : "password"}
                value={values.password1}
                onChange={handleChange("password1")}
                ref={ref1}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword1}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword1 ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </div>
            <div class="form-outline mb-4">
              <label
                htmlFor="standard-adornment-password2"
                className="d-block mb-1"
              >
                again new password
              </label>
              <Input
                id="standard-adornment-password2"
                type={values.showPassword2 ? "text" : "password"}
                value={values.password2}
                ref={ref2}
                onChange={handleChange("password2")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword2}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword2 ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </div>
            <button type="submit" class="btn btn-primary w-100 mt-2">
              Submit
            </button>
          </form>
        </Modal>
      </ModalStyle>
    </div>
  );
}

export default PasswordChangeModal;
