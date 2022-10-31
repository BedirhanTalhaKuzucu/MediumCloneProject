import React from "react";
import Images from "../../../assets/Images";
import { UserFollowStyle } from "./styles/WhoToFollow.styles";
import { useAppState } from "../../../contexts/AppContext";
import { useState, useEffect } from "react";
import { add_deleteFollowHandle, controlFollowFunction } from "../../../helpers/saveAndDeleteButtons";
import { UserPageState } from "../../../contexts/UserPageContext";
import { followedUserStories } from "../../../helpers/stories";
import {  useNavigate } from "react-router-dom";


const WhoToFollow = () => {

  const navigate = useNavigate();
  const { users } = useAppState();

  const [followedList, setfollowedList] = useState()
  const { followingStories, setFollowingStories, setoffsetforFollowing } = UserPageState();

  useEffect(() => {
    if (users.length > 0) {
      let tokenKey = get_token();
      controlFollowFunction(undefined, undefined, tokenKey, setfollowedList);
    }


  }, [users])



  const get_token = () => {
    const get_session_user_info = JSON.parse(
      sessionStorage.getItem("user_info")
    );
    let tokenKey = get_session_user_info.key;
    return tokenKey;
  };


  function addFollowHandle(data) {
    const tokenKey = get_token();
    let userId = data.user.id;

    if (followedList?.includes(data.user.id)) {
      console.log(followedList?.includes(data.user.id))
      //for DELETE
      add_deleteFollowHandle(true, tokenKey, userId);
      setfollowedList(followedList.filter(item => item !== data.user.id))
      console.log(data.id);
      setFollowingStories(followingStories.filter((item) => item.creatorInfo.userId !== data.id))
    } else {
      //for ADD
      add_deleteFollowHandle(false, tokenKey, userId, followedUserStories, setFollowingStories);
      setfollowedList([...followedList, data.user.id])
      setoffsetforFollowing(5)
    }
  }


  return (
    <UserFollowStyle>
      <p>Who to follow</p>

      {users ? (
        users?.map((data, index) => {
          return (
            <div className="user" key={data.id}>
              <img src={data.profile_photo} alt="" />
              <div className="name-shortBio">
                <div className="name" onClick={() => navigate(`/writer/stories/${data.id}`)}  >
                  {data.user.first_name + " " + data.user.last_name}
                </div>
                <div className="shortBio">
                  {data.short_bio ||
                    "A coffee obsessed, Netflix binge watching cat mama..."}
                </div>
              </div>
              <button className={followedList?.includes(data.user.id) ? "btn btn-success" : "btn btn-outline-success follow"}
                onClick={() => addFollowHandle(data, index)} >
                {
                  followedList?.includes(data.user.id) ? "following" : "follow"
                }
              </button>
            </div>
          );
        })
      ) : (
        <img src={Images.loading} alt="loading gif" />
      )}
    </UserFollowStyle>
  );
};

export default WhoToFollow;
