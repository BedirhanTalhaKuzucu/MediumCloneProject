import React from "react";
import { useFormik } from "formik";
import { useState } from "react";
import { searchBar } from "../../helpers/searchBar";
import { StyledProfilImage, SearchInputStyle } from "./SearchBar.styles";
import Dropdown from "react-bootstrap/Dropdown";
import { ImPriceTag } from "react-icons/im";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();

  const [searching, setSearching] = useState({
    Story: [],
    Tag: [],
    User: [],
  });

  const [openSearchBar, setopenSearchBar] = useState(false);

  const handleClick = (storyId) => {
    // console.log(storyId)
    navigate(`/story/${storyId}`);
  };

  const getToken = () => {
    const get_session_user_info = JSON.parse(
      sessionStorage.getItem("user_info")
    );
    const token = get_session_user_info.key;
    return token;
  };

  const formik = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: (values, { resetForm }) => {
      if (values.search !== "") {
        setopenSearchBar(true);
        console.log(values);
        const token = getToken();
        searchBar(values, setSearching, token);
      } else {
        setopenSearchBar(false);
      }
    },
  });

  return (
    <div>
      <form onChange={formik.handleSubmit}>
        <SearchInputStyle
          name="search"
          onChange={formik.handleChange}
          value={formik.values.search}
          autoComplete="off"
        />
        <Dropdown.Menu show={openSearchBar} className="w-75">
          {searching.User.length ? (
            <>
              <Dropdown.Header>PEOPLE</Dropdown.Header>
              <Dropdown.Divider className="w-75 mx-auto" />
            </>
          ) : (
            ""
          )}
          {searching.User.length
            ? searching.User.map((item, key) => (
                <Dropdown.Item eventKey="1" key={key}>
                  <StyledProfilImage image={item.userImage} />
                  {item.first_name} {item.last_name}
                </Dropdown.Item>
              ))
            : ""}

          {searching.Story.length ? (
            <>
              <Dropdown.Header>STORY</Dropdown.Header>
              <Dropdown.Divider className="w-75 mx-auto" />
            </>
          ) : (
            ""
          )}
          {searching.Story.length
            ? searching.Story.map((item, key) => (
                <Dropdown.Item
                  eventKey="1"
                  key={key}
                  onClick={() => navigate(`/story/${item.id}`)}
                >
                  <StyledProfilImage image={item.image} />
                  {item.title}
                </Dropdown.Item>
              ))
            : ""}

          {searching.Tag.length ? (
            <>
              <Dropdown.Header>CATEGORY</Dropdown.Header>
              <Dropdown.Divider className="w-75 mx-auto" />
            </>
          ) : (
            ""
          )}
          {searching.Tag.length
            ? searching.Tag.map((item, key) => (
                <Dropdown.Item
                  eventKey="1"
                  key={key}
                  onClick={() => navigate(`/tag/${item.id}`)}
                >
                  <ImPriceTag className="mx-2" />
                  {item.tag_name}
                </Dropdown.Item>
              ))
            : ""}
        </Dropdown.Menu>
      </form>
    </div>
  );
}

export default SearchBar;
