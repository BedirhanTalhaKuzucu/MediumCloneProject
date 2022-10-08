import React from "react";
import Images from "../../../assets/Images";
import { UserFollowStyle } from "./styles/WhoToFollow.styles";
import { useAppState } from "../../../contexts/AppContext";
import { useState } from "react";
import { add_deleteFollowHandle } from "../../../helpers/saveAndDeleteButtons";
import { UserPageState } from "../../../contexts/UserPageContext";
import { followedUserStories } from "../../../helpers/stories";

const WhoToFollow = () => {

  const { users } = useAppState();
  const [followOrFollowing, setfollowOrFollowing] = useState(false);
  const { followingStories, setFollowingStories, setoffsetforFollowing } = UserPageState();

  // console.log(users);

  const get_token = () => {
    const get_session_user_info = JSON.parse(
      sessionStorage.getItem("user_info")
    );
    let tokenKey = get_session_user_info.key;
    return tokenKey;
  };

  const followButton = ( data ) => {
    console.log( data )
  }


  const addFollowHandle = (data) => {
    const tokenKey = get_token();
    let userId = data.user.id;

    if (followOrFollowing) {
      //for DELETE
      add_deleteFollowHandle(followOrFollowing, tokenKey, userId);
      setfollowOrFollowing(false);
      // updateDetails();
      console.log(data.id );
      setFollowingStories( followingStories.filter((item) => item.creatorInfo.userId !== data.id ) )
    } else {
      //for ADD
      add_deleteFollowHandle(followOrFollowing, tokenKey, userId, followedUserStories, setFollowingStories );
      setfollowOrFollowing(true);
      // updateDetails();
      setoffsetforFollowing(5)
    }
  };

  return (
    <UserFollowStyle>
      <p>Who to follow</p>

      {users ? (
        users?.map((data) => {
          return (
            <div className="user" key={data.id}>
              <img src={data.profile_photo} alt="" />
              <div className="name-shortBio">
                <div className="name">
                  {data.user.first_name + " " + data.user.last_name}
                </div>
                <div className="shortBio">
                  {data.short_bio ||
                    "A coffee obsessed, Netflix binge watching cat mama..."}
                </div>
              </div>
              <button className="btn btn-outline-success follow"  onClick = { () =>  addFollowHandle(data) } >follow</button>
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
