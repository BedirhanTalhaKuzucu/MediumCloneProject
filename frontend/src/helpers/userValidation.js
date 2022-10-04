import { followedUserStories } from "./stories";
import { settingUserInfo } from "./userProfileInfo";

export const signUpFunction = (values, resetForm, setErrorMesage, navigate) => {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let raw = JSON.stringify({
    email: values.email,
    first_name: values.firstName,
    last_name: values.lastName,
    password: values.password,
    password2: values.password2,
  });

  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://127.0.0.1:8000/auth/register/", requestOptions)
    .then((response) => {
      // console.log(response);
      if (!response.ok) {
        response.json().then((text) => {
          // console.log(text);
          setErrorMesage(text);
        });
      } else {
        response.text().then((result) => {
          setErrorMesage("");
          sessionStorage.setItem("user_info", result);
          resetForm({ values: "" });
          navigate("home");
        });
      }
    })
    .catch((error) => console.log(error));
};

export const logInFunction = (
  values,
  resetForm,
  handleErrorMesage,
  navigate,
  setErrorMesage,
  setFollowingStories,
  getToken,
  setsettingPageInfo
) => {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let raw = JSON.stringify({
    email: values.email,
    password: values.password,
  });

  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://127.0.0.1:8000/auth/login/", requestOptions)
    .then((response) => {
      if (!response.ok) {
        response.json().then((text) => {
          // console.log(text);
          handleErrorMesage();
        });
      } else {
        response.text().then((result) => {
          setErrorMesage("");
          sessionStorage.setItem("user_info", result);
          let token = getToken();
          const user_info = JSON.parse(sessionStorage.getItem("user_info"));
          const userId = user_info.userInfo.userId;
          followedUserStories(setFollowingStories, token);
          settingUserInfo(setsettingPageInfo, token, userId);
          resetForm({ values: "" });
          navigate("home");
        });
      }
    })
    .catch((error) => console.log(error));
};
