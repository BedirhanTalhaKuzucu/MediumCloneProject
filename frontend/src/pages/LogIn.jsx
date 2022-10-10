import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useAppState } from "../contexts/AppContext";
import { useAuthStates } from "../contexts/AuthContext";
import { useFormik } from "formik";
import { validationSchemaLogIn } from "../helpers/formValidations";
import { useState, memo } from "react";
import { logInFunction } from "../helpers/userValidation";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const [errorMesage, setErrorMesage] = useState(false);
  const navigate = useNavigate();
  const { setsettingPageInfo } = useAppState();

  const {
    logInShow,
    setLogInShow,
    setFollowingStories,
    getToken,
    setActivate,
  } = useAuthStates();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchemaLogIn,
    onSubmit: (values, { resetForm }) => {
      // console.log(values)
      logInFunction(
        values,
        resetForm,
        handleErrorMesage,
        navigate,
        setErrorMesage,
        setFollowingStories,
        getToken,
        setsettingPageInfo,
        setActivate
      );
    },
  });

  const handleErrorMesage = () => {
    setErrorMesage("Email or Pasword is not correct!!!");
  };

  const customHandleChange = (e) => {
    setErrorMesage("");
    formik.handleChange(e);
  };

  return (
    <Modal
      show={logInShow}
      onHide={() => setLogInShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Welcome Back</Modal.Title>
      </Modal.Header>
      <Form onSubmit={formik.handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={(e) => {
                customHandleChange(e);
              }}
              value={formik.values.email}
              isInvalid={
                formik.touched.email
                  ? Boolean(formik.errors.email) || Boolean(errorMesage.email)
                  : false
              }
            />
            <Form.Control.Feedback type="invalid">
              <p> {formik.touched.email && formik.errors.email} </p>
              <p>{errorMesage.email ? errorMesage.email : ""}</p>
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              isInvalid={
                formik.touched.password
                  ? Boolean(formik.errors.password) ||
                    Boolean(errorMesage.password)
                  : false
              }
            />
            <Form.Control.Feedback type="invalid">
              {formik.touched.password && formik.errors.password}
              <p>{errorMesage.password ? errorMesage.password : ""}</p>
            </Form.Control.Feedback>
          </Form.Group>

          <p style={{ color: "red" }}>{errorMesage ? errorMesage : ""}</p>
        </Modal.Body>
        <Modal.Footer
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button className="btn btn-link">
            <small>Create Account</small>
          </button>
          <Button variant="warning" type="submit">
            Submit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default memo(LogIn);
