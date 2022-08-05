import React, { useNavigate } from "react";
import { useAppState } from "../../../contexts/AppContext";
import { Container } from "./styles/ReadingToday.styles";

const ReadingToday = () => {
  const { trendList } = useAppState();
  // console.log(trendList);

  return (
    <Container>
      {trendList ? (
        trendList?.slice(0, 3).map((data, id) => (
          <section key={id} onClick={() => console.log("Hi!")}>
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
          </section>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </Container>
  );
};

export default ReadingToday;
