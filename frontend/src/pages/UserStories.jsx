import React from "react";
import { Link, Outlet } from "react-router-dom";
import UDNavbar from "../components/UserDashboard/UDNavbar";
import UDSideBar from "../components/UserDashboard/UDSideBar";
import YourStoriesMain from "../components/UserStoriesParts/YourStoriesMain";

const UserStories = () => {
  return (
    <div className="d-flex">
      <UDNavbar />
      <YourStoriesMain />
      <UDSideBar />
    </div>
  );
};

export default UserStories;
