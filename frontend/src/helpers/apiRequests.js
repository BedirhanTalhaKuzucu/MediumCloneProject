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

  for (let index = 0; index < 6; index++) {
    list.map((item) => {
      if (item.id === numberOfClapsList[index].id) {
        trendingStory.push(item);
      }
    });
  }

  return trendingStory;
}

export const getData = (setData, setTrendList) => {
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

export const createStory = (formData, values, resetForm) => {
  // console.log(formData);
  // console.log(values)

  // resetForm({values:""})

  let myHeaders = new Headers();

  let formdata = new FormData();
  formdata.append("title", formData.title);
  formdata.append("content", formData.story);
  formdata.append("image", values.image);
  formdata.append("tag_name", values.tag_name);
  formdata.append("user_id", "1");
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

export const followedUserStories = (setfollowingStory) => {
  let myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Token 199b7f0caab715642e5314fcc68fcdb6135fbb98"
  );
  //   myHeaders.append(
  //     "Cookie",
  //     "csrftoken=ELiWUgqxhTQmVoViigupeVDooY7d90qARaohIkvQSS5ZqJy4p26tjhCzRzyCXJRJ"
  //   );

  let requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch("http://127.0.0.1:8000/blog/stories/following", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      setfollowingStory(result.results)
    })
    .catch((error) => console.log("error", error));
};

export const searchBar = (values, setSearching) => {

  let myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Token 199b7f0caab715642e5314fcc68fcdb6135fbb98"
  );
  

  let requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  let url =`http://127.0.0.1:8000/blog/stories/search?search=${values.search}`
  fetch(url, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result)
      setSearching(result.results)
    })
    .catch((error) => console.log("error", error));
};

export const userDetails = (setFollowingTag, setFollowingUser) => {
  let myHeaders = new Headers();
  
  let requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  fetch("http://127.0.0.1:8000/auth/users/dd8be17f-91fa-4cc0-b83d-376d56cd4875/", requestOptions)
    .then(response => response.json())
    .then(result => {
      setFollowingTag(result.user.followed_topics)
      setFollowingUser(result.user.followed_user)
    })
    .catch(error => console.log('error', error));
  
};
