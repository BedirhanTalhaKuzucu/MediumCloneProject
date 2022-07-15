import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useAppState } from "../contexts/AppContext";
import * as yup from 'yup';
import { useFormik } from 'formik';

function SignIn() {

    const validationSchema = yup.object({
        email: yup
          .string('Enter your email')
          .email('Enter a valid email')
          .required('Email is required'),
        firstName: yup
           .string('Enter your Firstname')
          .max(20, 'Must be 15 characters or less')
          .required('Required'),
        lastName: yup
           .string('Enter your Lastname')
          .max(25, 'Must be 15 characters or less')
          .required('Required'),
        password: yup
          .string('Enter your password')
          .min(5, 'Password should be of minimum 5 characters length')
          .required('Password is required'),
        confirmPassword: yup
          .string()
          .oneOf([yup.ref('password'), null], 'Passwords must match')
      });

    const formik = useFormik({
        initialValues: {
          firstName: "",
          lastName: "",
          email: '',
          password:"",
          confirmPassword: "",
        },
        validationSchema: validationSchema,
        onSubmit: ((values, event ) => {
                console.log(formik.touched.email)
               
                alert(JSON.stringify(values, null, 2));
        }),
      });

    const { show, handleClose} = useAppState()


    return (
        <Modal show={show} onHide={handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered >
            <Modal.Header closeButton>
                <Modal.Title>Join Medium</Modal.Title>
            </Modal.Header>
            <Form onSubmit={formik.handleSubmit} >
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="firstName">
                        <Form.Label>FirstName</Form.Label>
                        <Form.Control type="text" placeholder="Enter Firstname"
                        name="firstName"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                        isInvalid={formik.touched.firstName && Boolean(formik.errors.firstName)}
                        />
                        <Form.Control.Feedback type="invalid">
                           {  formik.touched.firstName &&  formik.errors.firstName }
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="lastName">
                        <Form.Label>LastName</Form.Label>
                        <Form.Control type="text" placeholder="Enter Lastname"
                         name="lastName"
                         onChange={formik.handleChange}
                         value={formik.values.lastName}
                         isInvalid={formik.touched.lastName && Boolean(formik.errors.lastName)}
                         />
                         <Form.Control.Feedback type="invalid">
                           {  formik.touched.lastName &&  formik.errors.lastName }
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail"  >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email"
                         placeholder="Enter email"
                         name="email"
                         onChange={formik.handleChange}
                         value={formik.values.email}
                         isInvalid={formik.touched.email && Boolean(formik.errors.email)}
                        />
                        <Form.Control.Feedback type="invalid">
                           {  formik.touched.email &&  formik.errors.email }
                        </Form.Control.Feedback>
                        
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                        name="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        isInvalid={formik.touched.password && Boolean(formik.errors.password)}
                        />
                        <Form.Control.Feedback type="invalid">
                           { formik.touched.password &&  formik.errors.password }
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type="password" placeholder="Re-enter password"
                        name="confirmPassword"
                        onChange={formik.handleChange}
                        value={formik.values.confirmPassword}
                        isInvalid={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                        />
                        <Form.Control.Feedback type="invalid">
                           { formik.touched.confirmPassword &&  formik.errors.confirmPassword }
                        </Form.Control.Feedback>
                    </Form.Group>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="warning" type="submit"  >
                        Submit
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default SignIn