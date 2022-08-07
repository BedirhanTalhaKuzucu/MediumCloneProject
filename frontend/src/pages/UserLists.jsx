import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import UDNavbar from "../components/UserDashboard/UDNavbar";
import UDSlideBar from "../components/UserDashboard/UDSideBar";
import UserListMain from "../components/UserStoriesParts/UserListMain";

const UserLists = () => {
  return (
    <div className="d-flex">
      <UDNavbar />
      <UserListMain />
      <UDSlideBar />
    </div>
  );
};

export default UserLists;
