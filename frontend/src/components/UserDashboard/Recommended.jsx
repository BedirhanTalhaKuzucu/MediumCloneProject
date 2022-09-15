import React, { useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { useState } from "react";
import Images from "../../assets/Images";
import InfiniteScroll from "react-infinite-scroll-component";

const Recommended = () => {
  const [items, setItems] = useState([]);

  const [offset, setoffset] = useState(0);

  const [hasMore, sethasMore] = useState(true);

  useEffect(() => {
    const getArticles = async () => {
      const res = await fetch(`http://127.0.0.1:8000/blog/stories/?offset=0`);
      const data = await res.json();
      // console.log(data);
      setItems(data.results);
    };

    getArticles();
  }, []);

  const fetchArticleCards = async () => {
    const res = await fetch(
      `http://127.0.0.1:8000/blog/stories/?offset=${offset}`
    );
    const data = await res.json();
    // console.log(data);
    return data.results;
  };

  const fetchData = async () => {
    const commentsFormServer = await fetchArticleCards();

    setItems([...items, ...commentsFormServer]);
    if (commentsFormServer.length === 0 || commentsFormServer.length < 5) {
      sethasMore(false);
    }
    setoffset(offset + 5);
  };

  return (
    <InfiniteScroll
      dataLength={items.length} //This is important field to render the next data
      next={fetchData}
      hasMore={hasMore}
      loader={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={Images.loading} alt="loading gif" />
        </div>
      }
      endMessage={<b>There are no more articles to show here..</b>}
    >
      {items.map((item, index) => {
        return <ArticleCard key={index} data={item} />;
      })}
    </InfiniteScroll>
  );
};

export default Recommended;
