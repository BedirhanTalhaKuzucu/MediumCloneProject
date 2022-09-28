import React, { useState, useEffect } from "react";
import StoryDetailMain from "../components/Story/StoryDetailMain";
import UDNavbar from "../components/UserDashboard/UDNavbar";
import UDSideBar from "../components/UserDashboard/UDSideBar";
import { getStoryDetailsA } from "../helpers/stories";
import { useParams } from "react-router-dom";

const StoryDetail = () => {
  const [sideBarEffect, setsideBarEffect] = useState(false);
  const [detaylar, setdetaylar] = useState();
  const { id } = useParams();

  const get_token = () => {
    const get_session_user_info = JSON.parse(
      sessionStorage.getItem("user_info")
    );
    let tokenKey = get_session_user_info.key;
    return tokenKey;
  };

  const updateDetails = () => {
    let tokenKey = get_token();
    getStoryDetailsA(tokenKey, id, setdetaylar);
  };

  useEffect(() => {
    let tokenKey = get_token();
    getStoryDetailsA(tokenKey, id, setdetaylar);
    setsideBarEffect(true);
    return () => {
      setsideBarEffect(false);
    };
  }, [id]);

  return (
    <div className="d-flex">
      <UDNavbar />
      <StoryDetailMain detaylar={detaylar} />
      <UDSideBar
        sideBarEffect={sideBarEffect}
        authorInfo={detaylar ? detaylar.creatorInfo : " "}
        updateDetails={updateDetails}
      />
    </div>
  );
};

export default StoryDetail;
