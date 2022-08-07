import React, { useNavigate } from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles/UserProfile.styles";

const UserProfile = () => {
  return (
    <Container>
      <img src="" alt="user-photo" />
      <div className="username">User Name</div>
      <Link className="edit-profile" to="/home/profile">
        Edit profile
      </Link>
    </Container>
  );
};

export default UserProfile;
