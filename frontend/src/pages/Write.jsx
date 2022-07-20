import React, { useState } from 'react';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import logo from "../assets/Images/";
import Images from "../assets/Images";

import Button from 'react-bootstrap/Button';
import { Link, NavLink } from 'react-router-dom';

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
            <div>
                <div className="postEditorContainer">
                    <form action="" enctype="multipart/form-data">
                        <div className="input-grup">
                            <label className="profileUpdateLabel" htmlFor="">
                                {" "}
                                Title{" "}
                            </label>
                            <input
                                className="postEditorInput"
                                type="text"
                                name="title"
                            />
                        </div>
                        <div className="input-grup">
                            <label
                                className="profileUpdateLabel"
                                htmlFor="file-input"
                                style={{ cursor: "pointer" }}
                            >
                                Image
                            </label>

                            <input
                                id="file-input"
                                accept="image/*"
                                type="file"
                            />
                            <label className="profileUpdateLabel">
                                Select Topics:
                                
                            </label>
                        </div>
                        <CKEditor
                            editor={ClassicEditor}
                            name="content"
                           
                        />
                        <button className="addBtn" >
                            {" "}
                            Add{" "}
                        </button>
                    </form>
                    
                </div>
            </div>
        </div>

    )
}

export default Write