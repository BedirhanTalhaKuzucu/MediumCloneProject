import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useAppState } from "../contexts/AppContext";
import { useFormik } from "formik";
import { validationSchema } from "../helpers/formValidations";
import { useState } from "react";
import { signUpFunction } from "../helpers/userValidation";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const errorMesageTemplate = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    password2: "",
  };

  const [errorMesage, setErrorMesage] = useState(errorMesageTemplate);
  const navigate = useNavigate();
  const { show, handleClose } = useAppState();

  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      password2: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      signUpFunction(values, resetForm, setErrorMesage, navigate);
    },
  });

  const customHandleChange = (e) => {
    setErrorMesage(errorMesageTemplate);
    formik.handleChange(e);
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Join Medium</Modal.Title>
      </Modal.Header>
      <Form onSubmit={formik.handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="firstName">
            <Form.Label>FirstName</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Firstname"
              name="firstName"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              isInvalid={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
            />
            <Form.Control.Feedback type="invalid">
              {formik.touched.firstName && formik.errors.firstName}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="lastName">
            <Form.Label>LastName</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Lastname"
              name="lastName"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              isInvalid={
                formik.touched.lastName && Boolean(formik.errors.lastName)
              }
            />
            <Form.Control.Feedback type="invalid">
              {formik.touched.lastName && formik.errors.lastName}
            </Form.Control.Feedback>
          </Form.Group>
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
          <Form.Group className="mb-3" controlId="formBasicPassword2">
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control
              type="password"
              placeholder="Re-enter password"
              name="password2"
              onChange={formik.handleChange}
              value={formik.values.password2}
              isInvalid={
                formik.touched.password2 && Boolean(formik.errors.password2)
              }
            />
            <Form.Control.Feedback type="invalid">
              {formik.touched.password2 && formik.errors.password2}
            </Form.Control.Feedback>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" type="submit">
            Submit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default SignIn;
