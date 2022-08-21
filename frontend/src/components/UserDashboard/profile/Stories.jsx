import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Images from "../../../assets/Images";
import { useAppState } from "../../../contexts/AppContext";
import { userDetails } from "../../../helpers/apiRequests";
import Draft from "../../UserStoriesParts/Drafts";
import Published from "../../UserStoriesParts/Published";
import ArticleCard from "../ArticleCard";

const sectionToBeDisplayed = {
  Published: () => <Draft />,
  Draft: () => <Published />,
};

const DEFAULT_VALUE = () => "Select Status...";

const Stories = () => {
  const [state, setState] = useState("section_one");

  const handleSelectChange = (e) => {
    console.log(e.target.value);
    setState(e.target.value);
  };

  const SectionComponent = sectionToBeDisplayed[state] || DEFAULT_VALUE;

  return (
    <div>
      <h3>Stories</h3>
      <select
        id=""
        name=""
        form=""
        onChange={handleSelectChange}
        className="form-select mb-3 w-100"
      >
        <option value="">...</option>
        <option value="Published">Published</option>
        <option value="Draft">Drafts</option>
      </select>
      <br />
      <SectionComponent />
    </div>
  );
};

export default Stories;
