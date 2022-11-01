import React, { useEffect, useState } from "react";
import TagDetailSideBar from "../components/SideBars/TagDetailSideBar";
import TagDetailMain from "../components/TagDetailParts/TagDetailMain";
import UDNavbar from "../components/UserDashboard/UDNavbar";
import { useParams } from "react-router-dom";
import { TagDetailsGet } from "../helpers/tags";

const TagDetail = () => {
  const { id } = useParams();

  const [tagDetails, setTagDetails] = useState("");

  useEffect(() => {
    TagDetailsGet(setTagDetails, id);
  }, [id]);


  return (
    <div className="d-flex">
      <UDNavbar />
      <TagDetailMain tagDetails={tagDetails} tagId = {id} />
      <TagDetailSideBar tagDetails={tagDetails} />
    </div>
  );
};

export default TagDetail;
