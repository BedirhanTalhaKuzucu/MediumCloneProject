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

  fetch(`http://127.0.0.1:8000/blog/stories/?limit=5`, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      const trendList = getTrending(data.results);
      setTrendList(trendList);
      setData(data.results);
    })
    .catch((error) => console.log("error", error));
};




export const scroolGetData = (setData, data, sethasMore, offset, setoffset) => {
  let myHeaders = new Headers();
  myHeaders.append(
    "Cookie",
    "csrftoken=ELiWUgqxhTQmVoViigupeVDooY7d90qARaohIkvQSS5ZqJy4p26tjhCzRzyCXJRJ"
  );

  let requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(`http://127.0.0.1:8000/blog/stories/?limit=5&offset=${offset}`, requestOptions)
    .then((response) => response.json())
    .then((lastData) => {
      console.log(data);
      
      setData([...data, ...lastData.results])
      if (lastData.results.length === 0 || lastData.results.length < 5) {
        sethasMore(false);
      }
      setoffset(offset + 5);
    })
    .catch((error) => console.log("error", error));
};
