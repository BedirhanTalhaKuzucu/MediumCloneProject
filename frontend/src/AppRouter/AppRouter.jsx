import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Following from "../components/UserDashboard/Following";
import Recommended from "../components/UserDashboard/Recommended";
import AboutYou from "../components/UserDashboard/profile/AboutYou";
import Security from "../components/UserDashboard/profile/Security";
import Stories from "../components/UserDashboard/profile/Stories";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import UserDashboard from "../pages/UserDashboard";
import NotFound from "../pages/NotFound";
import Write from "../pages/Write";
import StoryDetail from "../pages/StoryDetail";
import UserStories from "../pages/UserStories";
import Drafts from "../components/UserStoriesParts/Drafts";
import Published from "../components/UserStoriesParts/Published";
import Responses from "../components/UserStoriesParts/Responses";
import UserLists from "../pages/UserLists";
import SavedStories from "../components/UserStoriesParts/SavedStories";
import TagDetail from "../pages/TagDetail";
import { memo } from "react";


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

        <Route path="/story/:id" element={<StoryDetail />} />

        <Route path="home/profile" element={<Profile />}>
          <Route index element={<AboutYou />} />
          <Route path="about" element={<AboutYou />} />
          <Route path="stories" element={<Stories />} />
          <Route path="security" element={<Security />} />
        </Route>

        <Route path="me/stories" element={<UserStories />}>
          <Route index element={<Drafts />} />
          <Route path="drafts" element={<Drafts />} />
          <Route path="public" element={<Published />} />
          <Route path="responses" element={<Responses />} />
        </Route>

        <Route path="me/lists" element={<UserLists />}>
          <Route index element={<SavedStories />} />
          <Route path="save" element={<SavedStories />} />
        </Route>

        <Route path="tag" element={<TagDetail />} />
        <Route path="write" element={<Write />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

// export default AppRouter;

export default memo(AppRouter);
