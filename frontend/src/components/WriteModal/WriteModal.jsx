import Container from 'react-bootstrap/Container';
import { Link, NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useFormik } from 'formik';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createStory } from "../../helpers/apiRequests";
import Card from 'react-bootstrap/Card';


function WriteModal({ show, setShow, formData, formik1, seteditor }) {

    const fileHandle = (e) => {
        console.log(e.target);
        console.log(e.target.files[0]);

        // setformData({...formData, image: e.target.files[0] })
        // console.log(formData);
        formik2.values.image = e.target.files[0]

    }


    const formik2 = useFormik({
        initialValues: {
            image: null,
            tag_name: "",
            status: "",
            user_id: "1",
        },
        onSubmit: ((values, { resetForm } ) => {
            const creatorInfo = JSON.parse(sessionStorage.getItem("user_info"));
            const userId = creatorInfo.userInfo.userId
            values.user_id = userId
            const token = creatorInfo.key
            console.log(formData);
            formik1.resetForm({values:""})
            seteditor("")
            createStory(formData, values, resetForm, token )
        }),
    });

    return (
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

                            <Form.Control type="text" value={formData.title} disabled />
                        </Form.Group>
                        <Card border="light" className='mb-5'>
                            <Card.Header>Story</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                <div dangerouslySetInnerHTML={{__html: formData.story }} />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea12">
                            <label for="category" className="form-label">Category</label>
                            <input
                                className="form-control"
                                list="taglistOptions"
                                id="category"
                                placeholder="Type to category..."
                                name="tag_name"
                                onChange={formik2.handleChange}
                                value={formik2.values.tag_name} />

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
                        <Button variant="success" type="submit" size="sm" >Publish</Button>
                    </Container>
                </Form>


            </Modal.Body>
        </Modal>
    )
}

export default WriteModal