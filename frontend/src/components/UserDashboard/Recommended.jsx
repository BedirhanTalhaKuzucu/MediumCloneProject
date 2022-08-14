import React from "react";
import ArticleCard from "./ArticleCard";
import { useState } from "react";
import { useAppState } from "../../contexts/AppContext";
import Images from "../../assets/Images";

const Recommended = () => {
  const { data } = useAppState();

  return (
    <div>
      {data ? (
        data.map((item, key) => <ArticleCard key={key} data={item} />)
      ) : (
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
  );
};

export default Recommended;
