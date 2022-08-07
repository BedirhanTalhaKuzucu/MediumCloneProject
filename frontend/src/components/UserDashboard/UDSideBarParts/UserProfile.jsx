import { Link } from "react-router-dom";
import Images from "../../../assets/Images";
import { Container } from "./styles/UserProfile.styles";

const UserProfile = () => {
  return (
    <Container>
      <div>
        <img src="" alt="user-photo" />
        <div className="username">User Name</div>
        <Link className="edit-profile" to="/home/profile">
          Edit profile
        </Link>
      </div>
    </Container>
  );
};

export default UserProfile;
