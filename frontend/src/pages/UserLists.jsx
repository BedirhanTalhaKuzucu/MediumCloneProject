import React from "react";
import UserListsAndStoriesSideBar from "../components/SideBars/UserListsAndStoriesSideBar";
import UDNavbar from "../components/UserDashboard/UDNavbar";
import UserListMain from "../components/UserStoriesParts/UserListMain";

const UserLists = () => {
  return (
    <div className="d-flex">
      <UDNavbar />
      <UserListMain />
      <UserListsAndStoriesSideBar />
    </div>
  );
};

export default UserLists;
