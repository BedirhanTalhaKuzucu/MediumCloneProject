export const TopicRecommendedFunc = (setTopics) => {
  fetch("http://127.0.0.1:8000/blog/tags")
    .then((response) => response.json())
    .then((results) => {
      // console.log(results);
      // setTopics(results);
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
      setTopics(randomSelection(7));
    })
    .catch((error) => console.log("error", error));
};

export const TagDetailsGet = (setTagDetails, id) => {
  fetch(`http://127.0.0.1:8000/blog/tags/${id}/`)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      setTagDetails(result);
    })
    .catch((error) => console.log("error", error));
};

export const followTag = (token, tagId ) => {
  var myHeaders = new Headers();
  myHeaders.append( "Authorization", `Token ${token}` );
  myHeaders.append("Content-Type", "application/json");

  
  var raw = JSON.stringify({
    tag: `${tagId}`,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://127.0.0.1:8000/blog/stories/tagfollow", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};
