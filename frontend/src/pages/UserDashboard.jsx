import React from "react";
import { DashboardContainer } from "../components/UserDashboard/styles/UserDashboard";
import UDMain from "../components/UserDashboard/UDMain";
import UDNavbar from "../components/UserDashboard/UDNavbar";
import UDSideBar from "../components/UserDashboard/UDSideBar";

const UserDashboard = () => {
  return (
    <DashboardContainer>
      <UDNavbar />
      <UDMain />
      <UDSideBar />
    </DashboardContainer>
  );
};

export default UserDashboard;
