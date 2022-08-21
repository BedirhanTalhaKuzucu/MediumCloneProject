import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Icongif from "../assets/Icongif.png";
import Navbar from "./Navbar/Navbar";
import Images from "../assets/Images";

function Header() {
  return (
    <>
      <Navbar />
      <div className="bg-warning d-flex  flex-row-reverse">
        <Row className=" h-100  justify-content-center align-items-center">
          <Col className="mx-5 ">
            <h1 className="medium pb-3">Stay curious.</h1>
            <h5 className="pb-5 ">
              Discover stories, thinking, and expertise from writers on any
              topic.
            </h5>
            <Button
              variant="dark"
              style={{ borderRadius: "2rem", width: "13rem" }}
            >
              Start Reading
            </Button>
          </Col>
          <Col>
            <img
              src={Images.Mgif}
              alt=""
              style={{ width: "%100", height: "70vh" }}
              className="mx-auto  "
            />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Header;
