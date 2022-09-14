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
        <Col className="mx-5 texts">
          <h1 className="medium pb-3">Stay curious.</h1>
          <h5 className="pb-5 ">
            Discover stories, thinking, and expertise from writers on any topic.
          </h5>
          <Button
            variant="dark"
            style={{ borderRadius: "2rem", width: "13rem" }}
          >
            Start Reading
          </Button>
        </Col>
        <Col className="image">
          <img
            src={Images.Mgif}
            alt=""
            style={{ width: "%100", height: "70vh" }}
            className="mx-auto  "
          />
        </Col>
      </HeaderStyles>
    </>
  );
}

export default Header;
