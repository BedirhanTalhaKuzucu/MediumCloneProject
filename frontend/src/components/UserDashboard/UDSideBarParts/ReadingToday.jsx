import React from "react";
import { Link } from "react-router-dom";
import Images from "../../../assets/Images";
import { useAppState } from "../../../contexts/AppContext";
import { Container } from "./styles/ReadingToday.styles";

const ReadingToday = () => {
  const { trendList } = useAppState();
  // console.log(trendList);

  return (
    <Container>
      <Link to="#" className="readingToday">
        <span></span> What We're Reading Today
      </Link>
      {trendList ? (
        trendList?.slice(0, 3).map((data) => (
          <Link
            to={`/story/${data.id}`}
            state={{ details: data }}
            key={data.id}
            // onClick={() => console.log("Hi!")}
          >
            <nav>
              <img src={data?.creatorInfo.user_img} alt="" className="" />{" "}
              <span>
                {data?.creatorInfo.first_name +
                  " " +
                  data?.creatorInfo.last_name}
              </span>
            </nav>
            <nav>
              <h6>{data.title}</h6>
            </nav>
          </Link>
        ))
      ) : (
        <img src={Images.loading} alt="loading gif" />
      )}
    </Container>
  );
};

export default ReadingToday;
