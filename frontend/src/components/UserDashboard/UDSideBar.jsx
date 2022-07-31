import React from "react";
import { Link } from "react-router-dom";
import {
  SearchInputStyle,
  SideBarContainerStyle,
  TopicListStyle,
  UnlimitedButtonStyle,
} from "./styles/UDSideBar.styles";
import Dropdown from 'react-bootstrap/Dropdown';
import { useFormik } from 'formik';
import { useState } from "react";
import { searchBar } from "../../helpers/apiRequests"
import { CardContainer } from "./styles/Following.styles";


const topicList = [
  "FullStack",
  "Python",
  "Machine Learning",
  "Programming",
  "React",
  "Django",
];

const UDSlideBar = () => {

  const [searching, setSearching] = useState({
    Story: [],
    Tag: [],
    User: [],
  })
  const [openSearchBar, setopenSearchBar] = useState(false)

  const formik = useFormik({
    initialValues: {
      search: '',
    },
    onSubmit: ((values, { resetForm }) => {
      if (values.search !== "") {
        setopenSearchBar(true)
        console.log(values);
        searchBar(values, setSearching)
        console.log(Boolean(searching.Tag))
      } else {
        setopenSearchBar(false)
      }
    }),
  });


  return (
    <SideBarContainerStyle>
      <UnlimitedButtonStyle>Get unlimited access</UnlimitedButtonStyle>

      <form onChange={formik.handleSubmit} >
        <SearchInputStyle
          name="search"
          onChange={formik.handleChange}
          value={formik.values.search}
          autoComplete="off"
        />
        <Dropdown.Menu show={openSearchBar} className="w-75" >

          {searching.User.length ?
            <>
              <Dropdown.Header>PEOPLE</Dropdown.Header>
              <Dropdown.Divider className="w-75 mx-auto" />
            </> : ""}
          {searching.User.length ?
            searching.User.map((item, key) => (
              <Dropdown.Item eventKey="1" key={key} > {item.first_name} </Dropdown.Item>
            )
            ) : ""}


          {searching.Story.length ?
            <>
              <Dropdown.Header>STORY</Dropdown.Header>
              <Dropdown.Divider className="w-75 mx-auto" />
            </> : ""}
          {searching.Story.length ?
            searching.Story.map((item, key) => (
              <Dropdown.Item eventKey="1" key={key}>
                {/* <CardContainer>
                <section className="authorInf border-bottom-0"> 
                  <img src={item.image} alt="" className="pic"/>
                  <div className="fullName"> {item.title} </div>
                </section>
                </CardContainer> */}
                <Dropdown.Item eventKey="1" key={key} > {item.title} </Dropdown.Item>


                 </Dropdown.Item>
            )
            ) : ""}


          {searching.Tag.length ?
            <>
              <Dropdown.Header>CATEGORY</Dropdown.Header>
              <Dropdown.Divider className="w-75 mx-auto" />

            </> : ""}
          {searching.Tag.length ?
            searching.Tag.map((item, key) => (
              <Dropdown.Item eventKey="1" key={key}> {item.tag_name} </Dropdown.Item>
            )
            ) : ""}

        </Dropdown.Menu>
      </form>


      <Link to="#" className="readingToday">
        <span></span> What We're Reading Today
      </Link>

      <TopicListStyle>
        <h5>Recommended topics</h5>
        {topicList?.map((item) => {
          return (
            <div key={item.id} className="topicItem">
              <button>{item}</button>
            </div>
          );
        })}
      </TopicListStyle>
    </SideBarContainerStyle>
  );
};

export default UDSlideBar;
