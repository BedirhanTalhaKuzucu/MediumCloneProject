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
      // console.log(result);
      setSearching(result.results);
    })
    .catch((error) => console.log("error", error));
};
