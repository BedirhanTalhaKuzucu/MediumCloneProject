import React from "react";
import UserListsAndStoriesSideBar from "../components/SideBars/UserListsAndStoriesSideBar";
import UDNavbar from "../components/UserDashboard/UDNavbar";
import YourStoriesMain from "../components/UserStoriesParts/YourStoriesMain";

const UserStories = () => {
  return (
    <div className="d-flex">
      <UDNavbar />
      <YourStoriesMain />
      <UserListsAndStoriesSideBar />
    </div>
  );
};

export default UserStories;
