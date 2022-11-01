import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ListsContainerStyle, ListsStyles } from "./styles/UserListMain.styles";

const UserListMain = () => {
  return (
    <ListsContainerStyle>
      <h1>Your Lists</h1>
      <ListsStyles>
        <NavLink
          to="save"
          style={({ isActive }) => ({
            borderBottom: isActive ? "3px solid gray" : "",
            opacity: isActive ? "1" : "",
          })}
        >
          Saved
        </NavLink>
      </ListsStyles>
      <Outlet />
    </ListsContainerStyle>
  );
};

export default UserListMain;








