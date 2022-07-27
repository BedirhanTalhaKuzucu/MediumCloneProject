import React from "react";
import StoryDetailMain from "../components/Story/StoryDetailMain";
import UDNavbar from "../components/UserDashboard/UDNavbar";
import UDSideBar from "../components/UserDashboard/UDSideBar";

const StoryDetail = () => {
  return (
    <div className="d-flex">
      <UDNavbar />
      <StoryDetailMain/>
      <UDSideBar/>
    </div>
  );
};

export default StoryDetail;
