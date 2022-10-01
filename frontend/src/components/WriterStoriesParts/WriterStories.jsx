import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { YourStoriesStyles } from "../UserStoriesParts/styles/YourStoriesMain.styles";

const WriterStoriesMain = ({authorInfo} ) => {
  const navigate = useNavigate();
  return (
    <YourStoriesStyles>
      <header>
        <h1>{authorInfo.first_name + " " + authorInfo.last_name} </h1>
      </header>
      <div className="links">
        <NavLink
          style={({ isActive }) => ({
            borderBottom: isActive ? "3px solid gray" : "",
            opacity: isActive ? "1" : "",
          })}
          to="drafts"
        >
          Home
        </NavLink>
      </div>
      {/* <Outlet /> */}
    </YourStoriesStyles>
  );
};

export default WriterStoriesMain;
