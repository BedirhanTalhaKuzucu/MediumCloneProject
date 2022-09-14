import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Navbar from "../Navbar/Navbar";
import Images from "../../assets/Images";
import { HeaderStyles } from "./Header.styles";

function Header() {
  return (
    <>
      <Navbar />
      <HeaderStyles className="bg-warning">
        <div className=" texts">
          <h1 className="medium pb-3">Stay curious.</h1>
          <h6 className="pb-5 ">
            Discover stories, thinking, and expertise from writers on any topic.
          </h6>
          <Button
            variant="dark"
            style={{ borderRadius: "2rem", width: "13rem" }}
          >
            Start Reading
          </Button>
        </div>
        <div className="image">
          <img
            src={Images.Mgif}
            alt=""
            // style={{ width: "%100", height: "70vh" }}
            className="gif"
          />
        </div>
      </HeaderStyles>
    </>
  );
}

export default Header;
