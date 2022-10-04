import React from "react";
import { NavLink } from "react-router-dom";
import { YourStoriesStyles } from "../UserStoriesParts/styles/YourStoriesMain.styles";
import StoryCard from "./StoryCard";

const WriterStoriesMain = ({authorInfo, storiesDetail} ) => {
  return (
    <YourStoriesStyles>
      <header>
        <h1>{authorInfo.first_name + " " + authorInfo.last_name} </h1>
      </header>
      <div className="links">
        <NavLink style={({ isActive }) => ({ borderBottom: isActive ? "3px solid gray" : "", opacity: isActive ? "1" : "",})} to="" >
          Home
        </NavLink>
      </div>
      <StoryCard storiesDetail = {storiesDetail} /> 
    </YourStoriesStyles>
  );
};

export default WriterStoriesMain;
