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
import StoryUpdate from "../pages/StoryUpdate";
import Drafts from "../components/UserStoriesParts/Drafts";
import Published from "../components/UserStoriesParts/Published";
import UserLists from "../pages/UserLists";
import SavedStories from "../components/UserStoriesParts/SavedStories";
import TagDetail from "../pages/TagDetail";
import PrivateRouter from "./PrivateRouter";
import { memo } from "react";
import Contributors from "../pages/Contributors";
import WriterPage from "../pages/WriterPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="home" element={<PrivateRouter />}>
          <Route path="" element={<UserDashboard />} />
        </Route>
        <Route path="/home" element={<UserDashboard />}>
          <Route index element={<Following />} />
          <Route path="following" element={<Following />} />
          <Route path="recommended" element={<Recommended />} />
        </Route>

        {/* <Route path="/story/:id" element={<PrivateRouter />}> */}
        <Route path="/story/:id" element={<StoryDetail />} />
        <Route path="/story/update/:id" element={<StoryUpdate />} />
        {/* </Route> */}

        <Route path="home/profile" element={<PrivateRouter />}>
          <Route path="" element={<Profile />}>
            <Route index element={<AboutYou />} />
            <Route path="about" element={<AboutYou />} />
            <Route path="stories" element={<Stories />} />
            <Route path="security" element={<Security />} />
          </Route>
        </Route>

        <Route path="me/stories" element={<PrivateRouter />}>
          <Route path="" element={<UserStories />}>
            <Route index element={<Drafts />} />
            <Route path="drafts" element={<Drafts />} />
            <Route path="public" element={<Published />} />
          </Route>
        </Route>

        <Route path="me/lists" element={<PrivateRouter />}>
          <Route path="" element={<UserLists />}>
            <Route index element={<SavedStories />} />
            <Route path="save" element={<SavedStories />} />
          </Route>
        </Route>

        {/* <Route path="writer/stories/:id" element={<PrivateRouter />}> */}
        <Route path="writer/stories/:id" element={<WriterPage />} />
        {/* </Route> */}

        <Route path="tag/:id" element={<TagDetail />} />
        <Route path="write" element={<Write />} />
        <Route path="/contributors" element={<Contributors />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

// export default AppRouter;

export default memo(AppRouter);
