import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Images from "../assets/Images";
import { Link, NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Editor } from 'react-bootstrap-editor';
import { useFormik } from 'formik';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import {createStory} from "../helpers/apiRequests"



function Write() {
    const [formData, setformData] = useState("")

    const [editor, seteditor] = useState("")
    const [show, setShow] = useState(false);

    const formik1 = useFormik({
        initialValues: {
            title: '',
            story: "",
        },
        onSubmit: ((values) => {
            values.story = editor
            console.log(values)
            setformData(values)
        }),
    });

    const formik2 = useFormik({
        initialValues: {
            image: null,
            tag_name: "",
            status: "", 
            user_id:"1",
        },
        onSubmit: ((values ) => {
            // setformData({...formData, tag_name:values.tag_name, status:values.status, user_id:"1", })
            values.user_id="1"
            console.log(formData);
            createStory(formData, values )
            
        }),
    });

    const handleSubmit = () => {
        formik1.handleSubmit();
        setShow(true);
    }

    const fileHandle = (e) => {
        console.log(e.target.files[0]);
        // setformData({...formData, image: e.target.files[0] })
        // console.log(formData);
        formik2.values.image =e.target.files[0]

    }

    return (
        <div>
            <Navbar bg="" variant="light" style={{ height: '4.5rem' }} className="border-1 border-bottom border-dark">
                <Container>
                    <Nav className="justify-content-start align-items-center "   >
                        <Navbar.Brand as={NavLink} to="home" >
                            <img src={Images.logo} style={{ 'width': '10rem' }} alt="logo" />
                        </Navbar.Brand>
                        <small> Draft in  FirstName LastName </small>
                    </Nav>

                    <Nav className="justify-content-end align-items-center "   >
                        <Button variant="success" type="submit" onClick={handleSubmit} size="sm" >Publish</Button>
                        <Nav.Link as={NavLink} to="home" className="text-dark me-1">Profil</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Container className="my-5">
                <Form onSubmit={formik1.handleSubmit} >
                    <Container style={{ width: '30rem', height: '10rem' }} >
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Title"
                                name="title"
                                onChange={formik1.handleChange}
                                value={formik1.values.title} />
                        </Form.Group>
                    </Container>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea12">
                        <Form.Label>Story</Form.Label>
                        <Editor placeholder="Title"
                            name="story"
                            onChange={seteditor}
                            value={formik1.values.story}
                        />
                    </Form.Group>
                    {/* <Button variant="warning" type="submit"  >
                        Submit
                    </Button> */}
                </Form>
            </Container>
            <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Story Preview</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={formik2.handleSubmit} >
                        <Container style={{ width: '30rem' }} >
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Select a Image</Form.Label>
                                <Form.Control type="file" accept="image/*" placeholder="Image" onChange={(e) => fileHandle(e)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea12">
                                <Form.Label>Title</Form.Label>

                                <Form.Control type="text" disabled />
                            </Form.Group>
                            <FloatingLabel
                                controlId="floatingTextarea"
                                label="Comments"
                                className="mb-3"
                            >
                                <Form.Control as="textarea" value={"asd"} placeholder="Leave a comment here" disabled />
                            </FloatingLabel>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea12">
                                <label for="category" className="form-label">Category</label>
                                <input
                                    className="form-control"
                                    list="taglistOptions" 
                                    id="category" 
                                    placeholder="Type to category..." 
                                    name="tag_name"
                                    onChange={formik2.handleChange}
                                    value={formik2.values.tag_name}    />

                                <datalist id="taglistOptions">
                                    <option value="Technology" />
                                    <option value="JavaScript" />
                                    <option value="Python" />
                                    <option value="Science" />
                                </datalist>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea12">
                                <Form.Label>Status</Form.Label>
                                <Form.Select aria-label="Default select example"
                                    name="status"
                                    onChange={formik2.handleChange}
                                    value={formik2.values.status} >
                                    <option value="Draft">Draft</option>
                                    <option value="Published">Published</option>
                                </Form.Select>
                            </Form.Group>
                            <Button variant="success" type="submit"  size="sm" >Publish</Button>
                        </Container>
                    </Form>
                </Modal.Body>
            </Modal>


        </div>

    )
}

export default Write