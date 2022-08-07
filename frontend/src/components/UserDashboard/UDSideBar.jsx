import React from "react";
import { Link } from "react-router-dom";
import {
  SearchInputStyle,
  SideBarContainerStyle,
  TopicListStyle,
  UnlimitedButtonStyle,
  StyledProfilImage,
} from "./styles/UDSideBar.styles";
import Dropdown from "react-bootstrap/Dropdown";
import { useFormik } from "formik";
import { useState } from "react";
import { searchBar } from "../../helpers/apiRequests";
import { CardContainer } from "./styles/Following.styles";
import { ImPriceTag } from "react-icons/im";
import SearchBar from "../SearchBar/SearchBar";
import ReadingToday from "./UDSideBarParts/ReadingToday";
import TagUsersInfo from "./UDSideBarParts/TagUsersInfo";
import UserProfile from "./UDSideBarParts/UserProfile";

const topicList = [
  "FullStack",
  "Python",
  "Machine Learning",
  "Programming",
  "React",
  "Django",
];

const UDSlideBar = () => {
  return (
    <SideBarContainerStyle>
      <UnlimitedButtonStyle>Get unlimited access</UnlimitedButtonStyle>

      <SearchBar />
      {/* <form onChange={formik.handleSubmit} >
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
              <Dropdown.Item eventKey="1" key={key} >
                < StyledProfilImage image={item.userImage} />
                {item.first_name}  {item.last_name}
              </Dropdown.Item>
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
                  < StyledProfilImage image={item.image} />
                  {item.title}
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
              <Dropdown.Item eventKey="1" key={key}> 
                <ImPriceTag className="mx-2" />
                {item.tag_name} 
              </Dropdown.Item>
            )
            ) : ""}

        </Dropdown.Menu>
      </form> */}

      <ReadingToday />
      {/* <TagUsersInfo /> */}
      {/* <UserProfile /> */}

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
