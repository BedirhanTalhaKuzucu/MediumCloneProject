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
import AboutYou from "../components/UserDashboard/profile/AboutYou";
import Security from "../components/UserDashboard/profile/Security";
import Stories from "../components/UserDashboard/profile/Stories";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import UserDashboard from "../pages/UserDashboard";
import Write from "../pages/Write" 

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

        <Route path="home/profile" element={<Profile />}>
          <Route index element={<AboutYou />} />
          <Route path="about" element={<AboutYou />} />
          <Route path="stories" element={<Stories />} />
          <Route path="security" element={<Security />} />
        </Route>
        <Route path="home/write" element={<Write />} />


      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
