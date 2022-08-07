import React from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { YourStoriesStyles } from "./styles/YourStoriesMain.styles";

const YourStoriesMain = () => {
  const navigate = useNavigate();
  return (
    <YourStoriesStyles>
      <header>
        <h1>Your stories</h1>
        <button className="btn btn-success" onClick={() => navigate("/write")}>
          Write a story
        </button>
      </header>
      <div className="links">
        <NavLink
          style={({ isActive }) => ({
            borderBottom: isActive ? "3px solid gray" : "",
            opacity: isActive ? "1" : "",
          })}
          to="drafts"
        >
          Drafts
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            borderBottom: isActive ? "3px solid gray" : "",
            opacity: isActive ? "1" : "",
          })}
          to="public"
        >
          Published
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            borderBottom: isActive ? "3px solid gray" : "",
            opacity: isActive ? "1" : "",
          })}
          to="responses"
        >
          Responses
        </NavLink>
      </div>
      <Outlet />
    </YourStoriesStyles>
  );
};

export default YourStoriesMain;
