import React from "react";
import Images from "../../../assets/Images";
import { UserFollowStyle } from "./styles/WhoToFollow.styles";
import { useAppState } from "../../../contexts/AppContext";
import { useState, useEffect } from "react";
import { add_deleteFollowHandle } from "../../../helpers/saveAndDeleteButtons";
import { UserPageState } from "../../../contexts/UserPageContext";
import { followedUserStories } from "../../../helpers/stories";


const WhoToFollow = () => {

  const { users } = useAppState();
  const [followOrFollowing, setfollowOrFollowing] = useState(false);
  const { followingStories, setFollowingStories, setoffsetforFollowing } = UserPageState();

  useEffect( () => {

    if (users) {
      let list = []
      users.map(item => {
        list = [...list, {id : item.id, follow: false}]
      })
      setfollowOrFollowing(list)
    }

  }, [ users ])


  

  const get_token = () => {
    const get_session_user_info = JSON.parse(
      sessionStorage.getItem("user_info")
    );
    let tokenKey = get_session_user_info.key;
    return tokenKey;
  };

  


  const addFollowHandle = (data) => {
    const tokenKey = get_token();
    let userId = data.user.id;
    let index = users.indexOf(data)


    if (followOrFollowing[index].follow) {
      // //for DELETE
      // add_deleteFollowHandle(followOrFollowing, tokenKey, userId);
      // setfollowOrFollowing(false);
      followOrFollowing[index].follow = false
      setfollowOrFollowing(followOrFollowing);
      console.log(followOrFollowing);
      // // updateDetails();
      // console.log(data.id );
      // setFollowingStories( followingStories.filter((item) => item.creatorInfo.userId !== data.id ) )
    } else {
      // //for ADD
      // add_deleteFollowHandle(followOrFollowing, tokenKey, userId, followedUserStories, setFollowingStories );
      // setfollowOrFollowing(true);
      let index = users.indexOf(data)
      followOrFollowing[index].follow = true
      setfollowOrFollowing(followOrFollowing);
      console.log(followOrFollowing);




      // // updateDetails();
      // setoffsetforFollowing(5)
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
              <button className="btn btn-outline-success follow"  onClick = { () =>  addFollowHandle(data) } >
                { 
                  followOrFollowing[users.indexOf(data)]?.follow ? "following" :"follow"
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
