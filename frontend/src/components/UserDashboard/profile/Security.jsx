import React, { useState } from "react";
import { SecurityContainer } from "../styles/profile/Security.styles";
import { Buttons } from "../styles/profile/AboutYou.styles";
import PasswordChangeModal from "./PasswordChangeModal";
import { settingUserInfo } from "../../../helpers/apiRequests";
import UserDeleteModal from "./UserDeleteModal";
import { useAppState } from "../../../contexts/AppContext";
import { useFormik } from "formik";

const Security = () => {
  const { settingPageInfo, setsettingPageInfo } = useAppState();

  const [edit, setEdit] = useState({
    email: true,
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      ...settingPageInfo,
      email: settingPageInfo ? settingPageInfo.email : "",
    },

    onSubmit: (values, { resetForm }) => {
      const get_session_user_info = JSON.parse(
        sessionStorage.getItem("user_info")
      );
      const token = get_session_user_info.key;
      const userId = get_session_user_info.userInfo.userId;
      settingUserInfo(setsettingPageInfo, token, userId, values, resetForm);
    },
  });

  function changeState(e) {
    if (e.target.className === "email") {
      setEdit({ ...edit, email: !edit.email });
    }

    if (e.target.innerHTML === "Save") {
      formik.handleSubmit();
      return;
    } else if (e.target.innerHTML === "Cancel") {
      formik.resetForm();
      return;
    }
  }

  return (
    <SecurityContainer>
      <h3>Security</h3>
      <nav>
        <div>
          <h5>Email</h5>
          <div className="EmailDiv">
            <input
              type="email"
              name="email"
              value={edit.email ? settingPageInfo?.email : formik.values.email}
              onChange={formik.handleChange}
              autoComplete="off"
            />
          </div>
          <p>
            Control whether to receive email from Medium. You’ll still receive
            administrative emails even if this setting is off.
          </p>
        </div>
        <Buttons>
          {edit.email ? (
            <button
              type="button"
              onClick={changeState}
              id="edit"
              className="email"
            >
              Edit
            </button>
          ) : (
            <>
              <button type="button" onClick={changeState} className="email">
                Save
              </button>
              <button type="button" onClick={changeState} className="email">
                Cancel
              </button>
            </>
          )}
        </Buttons>
      </nav>
      <nav>
        <div>
          <h5>Password</h5>
          <input type="password" value="111222" />
          <p>
            choose a strong password and please do not share your password with
            anyone
          </p>
        </div>
        <Buttons>
          <PasswordChangeModal />
        </Buttons>
      </nav>
      <nav className="deleteAcoount">
        <h5>Delete account</h5>
        <p>Permanently delete your account and all of your content.</p>
        <a
          href="#"
          //  onClick={() => deleteUser() && console.log("welldone")}
        >
          <UserDeleteModal />
        </a>
      </nav>
    </SecurityContainer>
  );
};

export default Security;
