import React from "react";
import ArticleCard from "./ArticleCard";
import { followedUserStories } from "../../helpers/apiRequests";
import { useEffect, useState } from "react";
import Images from "../../assets/Images";
import { useAppState } from "../../contexts/AppContext";
import InfiniteScroll from "react-infinite-scroll-component";



const Following = () => {
  const [items, setItems] = useState([]);

  const [offset, setoffset] = useState(0);

  const [hasMore, sethasMore] = useState(true);

  useEffect(() => {
    const get_session_user_info = JSON.parse(
      sessionStorage.getItem("user_info")
    );
    const token = get_session_user_info?.key;
    
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Token ${token}`);
    let requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    const getArticles = async () => {
      const res = await fetch(`http://127.0.0.1:8000/blog/stories/following?limit=5&offset=0`, requestOptions);
      const data = await res.json();
      console.log(data);
      setItems(data.results);
    };

    getArticles();
  }, []);

  const fetchArticleCards = async () => {
    const get_session_user_info = JSON.parse(
      sessionStorage.getItem("user_info")
    );
    const token = get_session_user_info?.key;

    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Token ${token}`);
    let requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    const res = await fetch(
      `http://127.0.0.1:8000/blog/stories/following?limit=5&offset=${offset}`, requestOptions
    );
    const data = await res.json();
    console.log(data);
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
      endMessage={<b>Yay! You have seen it all</b>}
    >
      {items.map((item, index) => {
        return <ArticleCard key={index} data={item} />;
      })}
    </InfiniteScroll> )
  // const [followingStories, setFollowingStories] = useState("");
  // const { followingStories} = useAppState()


  

  // useEffect(() => {
  // }, [followingStories]);

  // return (
  //   <div>
  //     {followingStories ? (
  //       followingStories.map((item, key) => (
  //         <ArticleCard key={key} data={item} />
  //       ))
  //     ) : (
  //       <div
  //         style={{
  //           display: "flex",
  //           justifyContent: "center",
  //           alignItems: "center",
  //         }}
  //       >
  //         <img src={Images.loading} alt="loading gif" />
  //       </div>
  //     )}
  //   </div>
  // );
};

export default Following;
