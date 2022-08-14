import React from "react";
import TagDetailSideBar from "../components/SideBars/TagDetailSideBar";
import TagDetailMain from "../components/TagDetailParts/TagDetailMain";
import UDNavbar from "../components/UserDashboard/UDNavbar";

const TagDetail = () => {
  return (
    <div className="d-flex">
      <UDNavbar />
      <TagDetailMain />
      <TagDetailSideBar />
    </div>
  );
};

export default TagDetail;
