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
  myHeaders.append(
    "Cookie",
    "csrftoken=ELiWUgqxhTQmVoViigupeVDooY7d90qARaohIkvQSS5ZqJy4p26tjhCzRzyCXJRJ"
  );

  let requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch("http://127.0.0.1:8000/blog/stories/", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      const trendList = getTrending(data.results);
      setTrendList(trendList);
      setData(data.results);
    })
    .catch((error) => console.log("error", error));
};
