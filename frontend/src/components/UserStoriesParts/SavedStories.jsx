import ArticleCard from "../UserDashboard/ArticleCard";
import React, { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useAppState } from "../../contexts/AppContext";
import { userDetailsForStories } from "../../helpers/apiRequests";
import { ListsContainerStyle, ListsStyles } from "./styles/UserListMain.styles";
import { SavedStyles } from "./styles/SavedStories.styles";

const SavedStories = () => {
  const { userInfo } = useAppState();
  const [userDetailForStories, setUserDetailForStories] = useState();

  useEffect(() => {
    const userId = userInfo?.userInfo?.profileInfoId;
    userDetailsForStories(userId, setUserDetailForStories);
    console.log(userDetailForStories);
  }, []);
  const data = userDetailForStories?.user?.saved_stories;
  console.log(data);
  data?.map((item) => console.log(item));

  const navigate = useNavigate();

  return (
    <SavedStyles>
      {data
        ? data?.map((item) => {
            return (
              <div key={item.id}>
                <div>{item.user}</div> <br />
                <div
                  onClick={() =>
                    navigate(`/story/${item.id}`, {
                      state: { data: data },
                    })
                  }
                >
                  {item?.title}
                </div>
                <div>{item.content}</div>
                <hr />
              </div>
            );
          })
        : "data yok"}
    </SavedStyles>
  );
};

export default SavedStories;
