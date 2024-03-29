import React from "react";
import { TagSideBarPartStyle } from "./styles/TagSideBarUserInfo.styles";

const TagSideBarUserInfo = ({ tagDetails }) => {
  let data = tagDetails;

  return (
    <TagSideBarPartStyle>
      <section className="tagInfoCounter">
        <nav className="nav1">
          <h3>{data.stories_count}</h3>
          <p>Stories</p>
        </nav>
        <nav className="nav2">
          <h3>{data.tag_follower_count}</h3>
          <p>Followers</p>
        </nav>
      </section>

      <section className="users">
        {data?.tag_follower?.map((item) => {
          return (
            <img
              key={item.id}
              src={
                item?.tag_follower?.userImage ||
                "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
              }
              alt=""
            />
          );
        })}
      </section>
    </TagSideBarPartStyle>
  );
};

export default TagSideBarUserInfo;
