export const settingUserInfo = (
  setsettingPageInfo,
  token,
  userId,
  values,
  resetForm
) => {
  if (values) {
    // console.log(values);
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Token ${token}`);
    myHeaders.append(
      "Cookie",
      "csrftoken=ELiWUgqxhTQmVoViigupeVDooY7d90qARaohIkvQSS5ZqJy4p26tjhCzRzyCXJRJ"
    );

    let formdata = new FormData();
    formdata.append("id", userId);
    formdata.append("username", values.username);
    formdata.append("first_name", values.first_name);
    formdata.append("last_name", values.last_name);
    formdata.append("email", values.email);
    // formdata.append("userfor.profile_photo", fileInput.files[0], values.profil_photo);
    formdata.append("userfor.short_bio", values.short_bio);

    let requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(
      `http://127.0.0.1:8000/auth/users/settings/${userId}/`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        setsettingPageInfo(result);
      })
      .catch((error) => console.log("error", error));
  } else {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Token ${token}`);
    myHeaders.append("Content-Type", "application/json");

    let requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `http://127.0.0.1:8000/auth/users/settings/${userId}/`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setsettingPageInfo(result);
        // console.log(result);
      })
      .catch((error) => console.log("error", error));
  }
};

export const updatedProfilImage = (
  token,
  userId,
  profil_ımage,
  setsettingPageInfo
) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Token ${token}`);
  myHeaders.append(
    "Cookie",
    "csrftoken=ELiWUgqxhTQmVoViigupeVDooY7d90qARaohIkvQSS5ZqJy4p26tjhCzRzyCXJRJ"
  );

  var formdata = new FormData();
  formdata.append("profile_photo", profil_ımage);

  var requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  fetch(
    `http://127.0.0.1:8000/auth/users/settings/image/${userId}/`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      // console.log(result);
      settingUserInfo(setsettingPageInfo, token, userId);
    })
    .catch((error) => console.log("error", error));
};

export const userDetails = (
  // setFollowingTag,
  // setFollowingUser,
  setUserDetail,
  userId,
  setUserArticle
) => {
  let myHeaders = new Headers();

  let requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(`http://127.0.0.1:8000/auth/users/${userId}`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      // setFollowingTag(result.user.followed_topics);
      // setFollowingUser(result.user.followed_user);
      setUserArticle(result.user.user_stories);
      setUserDetail(result);
      // console.log(result);
      // setDetail(result);
    })
    .catch((error) => console.log("error", error));
};

export const writerDetails = (setAuthorDetail, setStoriesDetail, userId) => {

  let myHeaders = new Headers();

  let requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(`http://127.0.0.1:8000/auth/users/${userId}`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      const authorInfo = {
        first_name: result.user.first_name,
        last_name: result.user.last_name,
        user_img: result.profile_photo,
        short_bio: result.short_bio,
        followedCount: result.user.follower_user?.length,        
        userProfilId: result.user.id,
        userId : userId
      };
      setAuthorDetail(authorInfo);
      setStoriesDetail(result.user.user_stories)
    })
    .catch((error) => console.log("error", error));
};

export const userDetailsForStories = (userId, setUserDetailForStories) => {
  let myHeaders = new Headers();

  let requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(`http://127.0.0.1:8000/auth/users/${userId}`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      setUserDetailForStories(result);
      // console.log(result);
    })
    .catch((error) => console.log("error", error));
};

export const changePasswordFunc = (values, Token) => {
  let myHeaders = new Headers();
  myHeaders.append("Authorization", `Token ${Token}`);
  myHeaders.append("Content-Type", "application/json");

  let raw = JSON.stringify({
    new_password1: values?.password1,
    new_password2: values?.password1,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(`http://127.0.0.1:8000/auth/password/change/`, requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

export const userProfileDelete = (Token, settingPageInfo, userId) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Token ${Token}`);
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    id: settingPageInfo.id,
    username: settingPageInfo.username,
    first_name: settingPageInfo.first_name,
    last_name: settingPageInfo.lastName,
    userfor: {
      short_bio: settingPageInfo.short_bio,
      profile_photo: settingPageInfo.profile_photo,
    },
    email: settingPageInfo.email,
  });

  var requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(`http://127.0.0.1:8000/auth/users/${userId}/`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
