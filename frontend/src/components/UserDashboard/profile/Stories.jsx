import React, { useState } from "react";
import Draft from "../../UserStoriesParts/Drafts";
import Published from "../../UserStoriesParts/Published";

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
      <select onChange={handleSelectChange} className="form-select mb-3 w-100">
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
