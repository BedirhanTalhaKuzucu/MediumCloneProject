import React from "react";
import { useLocation } from "react-router-dom";
import { TagSideBarPartStyle } from "./styles/TagSideBarUserInfo.styles";

const TagSideBarUserInfo = () => {
  let data = useLocation();
  data = data.state.detail;
  console.log(data);
  return (
    <TagSideBarPartStyle>
      <section className="tagInfoCounter">
        <nav className="nav1">
          <h3>{data.stories_count}</h3>
          <p>Stories</p>
        </nav>
        <nav className="nav2">
          <h3>{data.tag_follower_count}</h3>
          <p>Writers</p>
        </nav>
      </section>
      <section className="users">
        <img
          src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
          alt=""
        />
        <img
          src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
          alt=""
        />
        <img
          src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
          alt=""
        />
        <img
          src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
          alt=""
        />
        <img
          src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
          alt=""
        />
        <img
          src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
          alt=""
        />
        <img
          src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
          alt=""
        />
        <img
          src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
          alt=""
        />
        <img
          src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
          alt=""
        />
        <img
          src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
          alt=""
        />
      </section>
      {/* <section className="users">
        {data?.tag_follower?.map((item) => {
          return <div key={item.id}> {item.user}</div>;
        })}
      </section> */}
    </TagSideBarPartStyle>
  );
};

export default TagSideBarUserInfo;
