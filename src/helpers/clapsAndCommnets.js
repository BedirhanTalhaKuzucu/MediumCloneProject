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
    // console.log("addd");

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
    `http://127.0.0.1:8000/blog/stories/${storyId}/comment-create`,
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
