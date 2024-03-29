import React from "react";
import { useState } from "react";
import { AboutContainer, Buttons } from "../styles/profile/AboutYou.styles";
import { useAppState } from "../../../contexts/AppContext";
import { useFormik } from "formik";
import {
  settingUserInfo,
  updatedProfilImage,
} from "../../../helpers/userProfileInfo";

const AboutYou = () => {
  const { settingPageInfo, setsettingPageInfo } = useAppState();
  // console.log(settingPageInfo.email);

  const [edit, setEdit] = useState({
    firstname: true,
    bio: true,
    img: true,
    usernameButton: true,
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      ...settingPageInfo,
      first_name: settingPageInfo ? settingPageInfo.first_name : "",
      last_name: settingPageInfo ? settingPageInfo.last_name : "",
      short_bio: settingPageInfo ? settingPageInfo.userfor?.short_bio : "",
      profil_photo: settingPageInfo
        ? settingPageInfo.userfor?.profile_photo
        : "",
      username: settingPageInfo ? settingPageInfo.username : "",
      // email: settingPageInfo ? settingPageInfo.email : settingPageInfo.email,
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
    switch (e.target.className) {
      case "fullname":
        setEdit({ ...edit, firstname: !edit.firstname });
        break;
      case "bio":
        setEdit({ ...edit, bio: !edit.bio });
        break;
      case "img":
        setEdit({ ...edit, img: !edit.img });
        break;
      case "usernameButton":
        setEdit({ ...edit, usernameButton: !edit.usernameButton });
        break;
      default:
        break;
    }

    if (e.target.innerHTML === "Save") {
      formik.handleSubmit();
      return;
    } else if (e.target.innerHTML === "Cancel") {
      formik.resetForm();
      return;
    }
  }

  const fileHandle = (e) => {
    const profil_ımage = e.target.files[0];

    const get_session_user_info = JSON.parse(
      sessionStorage.getItem("user_info")
    );
    const token = get_session_user_info.key;
    const userId = get_session_user_info.userInfo.userId;
    updatedProfilImage(token, userId, profil_ımage, setsettingPageInfo);
  };

  return (
    <AboutContainer>
      <form onSubmit={formik.handleSubmit}>
        <h3>About You</h3>

        <nav>
          <div>
            <h5>Full Name</h5>
            <div className="NameDiv">
              <span>First Name: </span>
              <input
                type="text"
                name="first_name"
                value={
                  edit.firstname
                    ? settingPageInfo?.first_name
                    : formik.values.first_name
                }
                onChange={formik.handleChange}
                autoComplete="off"
              />
            </div>
            <div className="mt-3 NameDiv">
              <span>Last Name: </span>
              <input
                type="text"
                name="last_name"
                value={
                  edit.firstname
                    ? settingPageInfo?.last_name
                    : formik.values.last_name
                }
                onChange={formik.handleChange}
                autoComplete="off"
              />
            </div>

            <p>
              Your name appears on your Profile page, as your byline, and in
              your responses. It is a required field.
            </p>
          </div>
          <Buttons>
            {edit.firstname ? (
              <button
                type="button"
                onClick={changeState}
                id="edit"
                className="fullname"
              >
                Edit
              </button>
            ) : (
              <>
                <button
                  type="button"
                  onClick={changeState}
                  className="fullname"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={changeState}
                  className="fullname"
                >
                  Cancel
                </button>
              </>
            )}
          </Buttons>
        </nav>
        <nav>
          <div>
            <h5>Short Bio</h5>
            <input
              type="text"
              name="short_bio"
              value={
                edit.bio
                  ? settingPageInfo?.userfor?.short_bio
                  : formik.values.short_bio
              }
              placeholder="Add your short bio"
              onChange={formik.handleChange}
              autoComplete="off"
            />
            <p>
              Your short bio appears on your Profile and next to your stories.
              Max 160 characters.
            </p>
          </div>
          <Buttons>
            {edit.bio ? (
              <button type="button" onClick={changeState} className="bio">
                Edit
              </button>
            ) : (
              <>
                <button type="button" onClick={changeState} className="bio">
                  Save
                </button>
                <button type="button" onClick={changeState} className="bio">
                  Cancel
                </button>
              </>
            )}
          </Buttons>
        </nav>
        <nav>
          <div className="photoCon">
            <div className="photoDesc">
              <h5>Photo</h5>
              <p>
                Your photo appears on your Profile page and with your stories
                across Medium.
              </p>
              <p>
                {" "}
                Recommended size: Square, at least 1000 pixels per side. File
                type: JPG, PNG or GIF.
              </p>
            </div>
            <div>
              <input
                type="image"
                src={formik.values.profil_photo}
                alt=""
                className="profilePhoto"
              />
            </div>
          </div>
          <Buttons>
            {edit.img ? (
              <button type="button" onClick={changeState} className="img">
                Edit
              </button>
            ) : (
              <>
                <button>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => fileHandle(e)}
                    className="img"
                  />
                </button>
                {/* <button type="button" onClick={changeState} className="img" >Save</button> */}
                <button type="button" onClick={changeState} className="img">
                  Cancel
                </button>
              </>
            )}
          </Buttons>
        </nav>
        <nav>
          <div>
            <h5>Username & URL</h5>
            <div className="userName-URL">
              <div>
                <label htmlFor="">Username</label>
                <input
                  type="text"
                  name="username"
                  value={
                    edit.usernameButton
                      ? settingPageInfo?.username
                      : formik.values.username
                  }
                  onChange={formik.handleChange}
                  autoComplete="off"
                />
              </div>
              <div>
                <label htmlFor="">URL</label>
                <input
                  type="text"
                  value={`https://medium.com/@${
                    settingPageInfo && settingPageInfo.username
                  }`}
                />
              </div>
            </div>
          </div>
          <Buttons>
            {edit.usernameButton ? (
              <button
                type="button"
                onClick={changeState}
                className="usernameButton"
              >
                Edit
              </button>
            ) : (
              <>
                <button
                  type="button"
                  onClick={changeState}
                  className="usernameButton"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={changeState}
                  className="usernameButton"
                >
                  Cancel
                </button>
              </>
            )}
          </Buttons>
        </nav>
      </form>
    </AboutContainer>
  );
};

export default AboutYou;
