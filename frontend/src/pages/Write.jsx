import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Images from "../assets/Images";
import { Link, NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Editor } from 'react-bootstrap-editor';
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function Write() {

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
                        <Nav.Link as={NavLink} to="home" className="text-dark me-1">Publish</Nav.Link>
                        <Nav.Link as={NavLink} to="home" className="text-dark me-1">Profil</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Container>
                <Form>
                    <Container style={{width:'50rem', height:'10rem' }} >
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="Title" />
                        </Form.Group>
                    </Container>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Story</Form.Label>
                        <Editor value="" onChange={console.log} placeholder="Title"  />
                    </Form.Group>
                </Form>
            </Container>


        </div>

    )
}

export default Write