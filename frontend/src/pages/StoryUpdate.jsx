import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Images from "../assets/Images";
import { NavLink, useLocation } from "react-router-dom";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Editor } from "react-bootstrap-editor";
import { useFormik } from "formik";
import Button from "react-bootstrap/Button";
import StoryUpdateModal from "../components/StoryUpdateModal/StoryUpdateModal";

function StoryUpdate() {
  const [formData, setformData] = useState("");
  const location = useLocation();
  // console.log(location.state);
  const detailvalue = location?.state;

  const [editor, seteditor] = useState("");
  const [show, setShow] = useState(false);

  const formik1 = useFormik({
    initialValues: {
      title: detailvalue.title,
      story: detailvalue.content,
    },
    onSubmit: (values, { resetForm }) => {
      values.story = editor;
      // console.log(values);
      setformData(values);
    },
  });

  const editorHandle = (e) => {
    seteditor(e);
    formik1.handleSubmit();
  };

  const handleSubmit = () => {
    if (formik1.values.story !== "") {
      formik1.handleSubmit();
      setShow(true);
    } else {
      alert("Please update the content of the article");
    }
  };

  return (
    <div>
      <Navbar
        bg=""
        variant="light"
        style={{ height: "4.5rem" }}
        className="border-1 border-bottom border-dark"
      >
        <Container>
          <Nav className="justify-content-start align-items-center ">
            <Navbar.Brand as={NavLink} to="/home">
              <img src={Images.logo} style={{ width: "10rem" }} alt="logo" />
            </Navbar.Brand>
            <small> Draft in FirstName LastName </small>
          </Nav>

          <Nav className="justify-content-end align-items-center ">
            <Button
              variant="success"
              type="submit"
              onClick={handleSubmit}
              size="sm"
            >
              Update
            </Button>
            <Nav.Link
              as={NavLink}
              to="/home/profile"
              className="text-dark me-1"
            >
              Profil
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className="my-5">
        <Form onSubmit={formik1.handleSubmit}>
          <Container style={{ width: "30rem", height: "10rem" }}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title"
                name="title"
                onChange={formik1.handleChange}
                value={formik1.values.title}
              />
            </Form.Group>
          </Container>

          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea12"
          >
            <Form.Label>Story</Form.Label>
            <Editor
              placeholder="Title"
              name="story"
              onChange={(e) => {
                editorHandle(e);
              }}
              value={formik1.values.story}
              detailvalue={formik1.values.story}
            />
          </Form.Group>
        </Form>
      </Container>
      <StoryUpdateModal
        show={show}
        setShow={setShow}
        formik1={formik1}
        formData={formData}
        seteditor={seteditor}
        detailvalue={detailvalue}
      />
    </div>
  );
}

export default StoryUpdate;
