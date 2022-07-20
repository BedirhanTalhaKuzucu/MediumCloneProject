import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Container } from "../styles/profile/ProfileMain.styles";

const ProfileMain = () => {
  return (
    <Container>
      <secttion className="settings">
        <h3>Settings</h3>
        <Link to="about">About You</Link>
        <Link to="stories">Stories</Link>
        <Link to="security">Security</Link>
      </secttion>

      <section className="aboutYou">
        <Outlet />
      </section>
    </Container>
  );
};

export default ProfileMain;
