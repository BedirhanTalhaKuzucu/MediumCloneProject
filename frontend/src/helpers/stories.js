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
      // console.log(result);
      setdetaylar(result);
    })
    .catch((error) => console.log("error", error));
};

export const createStory = (formData, values, resetForm, token, navigate) => {
  let myHeaders = new Headers();
  myHeaders.append("Authorization", `Token ${token}`);

  let formdata = new FormData();
  formdata.append("title", formData.title);
  formdata.append("content", formData.story);
  values.image && formdata.append("image", values.image);
  formdata.append("tag_name", values.tag_name);
  formdata.append("user_id", values.user_id);
  formdata.append("status", values.status);

  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  fetch("http://127.0.0.1:8000/blog/stories/", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      resetForm({ values: "" });
      console.log(result);
      navigate(`/story/${result.id}`);
    })
    .catch((error) => console.log("error", error));
};

export const updateStory = (
  formData,
  values,
  resetForm,
  token,
  navigate,
  storyId
) => {
  let myHeaders = new Headers();
  myHeaders.append("Authorization", `Token ${token}`);

  let formdata = new FormData();
  formdata.append("title", formData.title);
  formdata.append("content", formData.story);
  values.image && formdata.append("image", values.image);
  formdata.append("tag_name", values.tag_name);
  formdata.append("user_id", values.user_id);
  formdata.append("status", values.status);

  let requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  fetch(`http://127.0.0.1:8000/blog/stories/${storyId}/`, requestOptions)
    .then((response) => response.json())
    .then((result) => {
      resetForm({ values: "" });
      console.log(result);
      navigate(`/story/${storyId}`);
    })
    .catch((error) => console.log("error", error));
};

export const storyDeleteFunc = (tokenKey, storyId, navigate) => {
  let myHeaders = new Headers();
  myHeaders.append("Authorization", `Token ${tokenKey}`);
  myHeaders.append("Content-Type", "application/json");

  let requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(`http://127.0.0.1:8000/blog/stories/${storyId}/`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      navigate("/me/stories");
    })
    .catch((error) => console.log("error", error));
};

//! Following Stories List
export const followedUserStories = (
  setfollowingStory,
  token,
  offset = 0,
  followingStories = "a",
  setoffset = "a",
  sethasMore = "a"
) => {
  let myHeaders = new Headers();

  myHeaders.append("Authorization", `Token ${token}`);

  let requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(
    `http://127.0.0.1:8000/blog/stories/following?limit=5&offset=${offset}`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(followingStories);
      console.log(result);
      if (setoffset === "a") {
        // console.log("deneme");
        setfollowingStory(
          result.results.filter((item) => item.status === "Published")
        );
        // console.log(result.results);
        console.log(followingStories);
      } else {
        setfollowingStory([
          ...followingStories,
          ...result.results.filter((item) => item.status === "Published"),
        ]);
        console.log(followingStories);

        if (result.results.length === 0) {
          sethasMore(false);
        } else {
          setoffset(offset + 5);
        }
      }
    })
    .catch((error) => console.log("error", error));
};

//! SideBar Who to Follow
export const UserFollowFunc = (setUsers) => {
  fetch("http://127.0.0.1:8000/auth/users")
    .then((response) => response.json())
    .then(({ results }) => {
      const randomSelection = (n) => {
        // console.log(results);
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
