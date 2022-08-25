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
      console.log(response);
      if (!response.ok) {
        response.json().then((text) => {
          console.log(text);
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
          console.log(text);
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
          settingUserInfo(setsettingPageInfo, token, userId);;
          resetForm({ values: "" });
          navigate("home");
        });
      }
    })
    .catch((error) => console.log(error));
};

function getTrending(list) {
  const numberOfClapsList = [];
  const trendingStory = [];

  list.map((item) => {
    const numberofClap = item.clap_story.length;
    const storyId = item.id;
    const obj = { id: storyId, numberofClap: numberofClap };
    //   Object.assign(numberOfClapsList, obj);
    numberOfClapsList.push(obj);
  });

  numberOfClapsList.sort(function (a, b) {
    return b.numberofClap - a.numberofClap;
  });

  for (let index = 0; index < 5; index++) {
    list.map((item) => {
      if (item.id === numberOfClapsList[index].id) {
        trendingStory.push(item);
      }
    });
  }

  return trendingStory;
}

export const getData = (setData, setTrendList) => {

  let myHeaders = new Headers();
  myHeaders.append("Cookie", "csrftoken=ELiWUgqxhTQmVoViigupeVDooY7d90qARaohIkvQSS5ZqJy4p26tjhCzRzyCXJRJ");

  let requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch("http://127.0.0.1:8000/blog/stories/", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const trendList = getTrending(data.results);
      setTrendList(trendList);
      setData(data.results);
    })
    .catch((error) => console.log("error", error));
};

export const settingUserInfo = (setsettingPageInfo, token, userId, values, resetForm ) => {

  if (values) {
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
        console.log(result);
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
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  }

};

export const updatedProfilImage = (token, userId, profil_ımage, setsettingPageInfo) => {
  var myHeaders = new Headers();
  myHeaders.append( "Authorization", `Token ${token}` );
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

  fetch(`http://127.0.0.1:8000/auth/users/settings/image/${userId}/`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result)
      settingUserInfo(setsettingPageInfo, token, userId,)  
    })
    .catch((error) => console.log("error", error));
}

export const getStoryDetailsA = (tokenKey, detailsId, setdetaylar) => {
  let myHeaders = new Headers();
  myHeaders.append("Authorization", `Token ${tokenKey}`);
  myHeaders.append("Content-Type", "application/json");

  let requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(`http://127.0.0.1:8000/blog/stories/${detailsId}/`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      setdetaylar(result);
    })
    .catch((error) => console.log("error", error));
};

export const createStory = (formData, values, resetForm, token) => {
  

  let myHeaders = new Headers();
  myHeaders.append("Authorization", `Token ${token}`);

  let formdata = new FormData();
  formdata.append("title", formData.title);
  formdata.append("content", formData.story);
  formdata.append("image", values.image);
  formdata.append("tag_name", values.tag_name);
  formdata.append("user_id", values.user_id );
  formdata.append("status", values.status);

  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  fetch("http://127.0.0.1:8000/blog/stories/", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      resetForm({ values: "" });
      // setformData("")
      console.log(result);
    })
    .catch((error) => console.log("error", error));
};

export const followedUserStories = (setfollowingStory, token) => {
  let myHeaders = new Headers();

  myHeaders.append("Authorization", `Token ${token}`);

  let requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch("http://127.0.0.1:8000/blog/stories/following", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log("deneme");
      setfollowingStory(result.results);
    })
    .catch((error) => console.log("error", error));
};

export const searchBar = (values, setSearching, token) => {
  let myHeaders = new Headers();
  myHeaders.append("Authorization", `Token ${token}`);

  let requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  let url = `http://127.0.0.1:8000/blog/stories/search?search=${values.search}`;
  fetch(url, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      setSearching(result.results);
    })
    .catch((error) => console.log("error", error));
};

export const userDetails = (
  // setFollowingTag,
  // setFollowingUser,
  setUserDetail,
  userId
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
      setUserDetail(result);
      console.log(result);
      // setDetail(result);
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
      console.log(result);
    })
    .catch((error) => console.log("error", error));
};

export const addClapFunction = (storyId, tokenKey, addClap) => {
  let myHeaders = new Headers();
  myHeaders.append("Authorization", `Token ${tokenKey}`);
  myHeaders.append("Content-Type", "application/json");

  let raw = JSON.stringify({ story: storyId });

  if (addClap) {
    console.log("delete");

    let requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:8000/blog/stories/deleteclap", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  } else {
    console.log("addd");

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:8000/blog/stories/addclap", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
};

export const TopicRecommendedFunc = (setTopics) => {
  fetch("http://127.0.0.1:8000/blog/tags")
    .then((response) => response.json())
    .then(({ results }) => {
      const randomSelection = (n) => {
        let newArr = [];
        if (n >= results.length) {
          return results;
        }
        for (let i = 0; i < n; i++) {
          let newElem = results[Math.floor(Math.random() * results.length)];
          while (newArr.includes(newElem)) {
            newElem = results[Math.floor(Math.random() * results.length)];
          }
          newArr.push(newElem);
        }
        return newArr;
      };
      setTopics(randomSelection(8));
    })
    .catch((error) => console.log("error", error));
};

export const UserFollowFunc = (setUsers) => {
  fetch("http://127.0.0.1:8000/auth/users")
    .then((response) => response.json())
    .then(({ results }) => {
      const randomSelection = (n) => {
        console.log(results);
        let newArr = [];
        if (n >= results.length) {
          return results;
        }
        for (let i = 0; i < n; i++) {
          let newElem = results[Math.floor(Math.random() * results.length)];
          while (newArr.includes(newElem)) {
            newElem = results[Math.floor(Math.random() * results.length)];
          }
          newArr.push(newElem);
        }
        return newArr;
      };
      setUsers(randomSelection(4));
    })
    .catch((error) => console.log("error", error));
};

export const addSavedFunction = (storyId, tokenKey, addSave) => {
  let myHeaders = new Headers();
  myHeaders.append("Authorization", `Token ${tokenKey}`);
  myHeaders.append("Content-Type", "application/json");

  let raw = JSON.stringify({ story: storyId });

  if (addSave) {
    console.log("delete");

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      // body: raw,
      redirect: "follow",
    };

    fetch(`http://127.0.0.1:8000/blog/save/${storyId}/`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  } else {
    // console.log("add");

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:8000/blog/save/", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
};

export const controlFollowFunction = (
  setfollowOrFollowing,
  userId,
  tokenKey
) => {
  let myHeaders = new Headers();
  myHeaders.append("Authorization", `Token ${tokenKey}`);
  myHeaders.append("Content-Type", "application/json");

  let requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch("http://127.0.0.1:8000/auth/following/", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);

      let followedList = [];
      result.results.map((item) => {
        followedList.push(item.followed);
      });

      if (followedList.includes(userId)) {
        setfollowOrFollowing(true);
      } else {
        setfollowOrFollowing(false);
      }
    })
    .catch((error) => console.log("error", error));
};

export const add_deleteFollowHandle = (followOrFollowing, tokenKey, userId) => {
  let myHeaders = new Headers();
  myHeaders.append("Authorization", `Token ${tokenKey}`);
  myHeaders.append("Content-Type", "application/json");

  if (followOrFollowing) {
    let raw = JSON.stringify({
      followed: userId,
    });

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`http://127.0.0.1:8000/auth/following/${userId}/`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  } else {
    let raw = JSON.stringify({
      followed: userId,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://127.0.0.1:8000/auth/following/", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
};

export const commentCreateFunc = (comment, storyId, Token) => {
  let myHeaders = new Headers();
  myHeaders.append("Authorization", `Token ${Token}`);
  myHeaders.append("Content-Type", "application/json");

  let raw = JSON.stringify({
    content: comment,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    `http://127.0.0.1:8000/blog/stories/${storyId}/comment-create/`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => console.log(result))
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
