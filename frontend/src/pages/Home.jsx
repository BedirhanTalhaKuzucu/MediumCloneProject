import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Cards from "../components/Cards/Cards";
import Categorys from "../components/HomeTags/Categorys";
import { useAppState } from "../contexts/AppContext";
import SignIn from "./SignIn";
import LogIn from "./LogIn";
import Images from "../assets/Images";
import { HomeStyles } from "./styles/Home.styles";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState, memo } from "react";
import { getData, scroolGetData } from "../helpers/trendList";


function Home() {
  const { data, trendList, setData, offsetforRecommend, setoffsetforRecommend  } = useAppState();

  // const [offset, setoffset] = useState(5);
  const [hasMore, sethasMore] = useState(true);

  return (
    <>
      <SignIn />
      <LogIn />
      <Header />
      <HomeStyles>
        <Sidebar trendList={trendList} />
        <div className="d-flex rowStyle">
          <div className="categories">
            <Categorys />
          </div>
          <div className="cards">
            {data ?
              (
                <InfiniteScroll
                  dataLength={data.length} //This is important field to render the next data
                  next={() => scroolGetData (setData, data, sethasMore, offsetforRecommend, setoffsetforRecommend )}
                  hasMore={hasMore}
                  loader={
                    <div style={{ display: "flex", justifyContent: "center",  alignItems: "center", }} >
                      <img src={Images.loading} alt="loading gif" />
                    </div>
                  }
                  endMessage={<b>There are no more articles to show here..</b>}
                >
                  {data.map((item) => {
                    return <Cards blog={item} key={item.id} />;
                  })}
                </InfiniteScroll>
              )

              : (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={Images.loading} alt="loading gif" />
                </div>
              )}
          </div>
        </div>
      </HomeStyles>
    </>
  );
}

export default memo(Home);

