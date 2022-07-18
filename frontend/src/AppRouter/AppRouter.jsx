import React from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Following from "../components/UserDashboard/Following";
import Recommended from "../components/UserDashboard/Recommended";
import Home from "../pages/Home";
import UserDashboard from "../pages/UserDashboard";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<UserDashboard />}>
          <Route index element={<Following />} />
          <Route path="following" element={<Following />} />
          <Route path="recommended" element={<Recommended />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
