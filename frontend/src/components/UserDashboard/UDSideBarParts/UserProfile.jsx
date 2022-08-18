import { Link } from "react-router-dom";
import Images from "../../../assets/Images";
import { Container } from "./styles/UserProfile.styles";
import { useState, useEffect } from "react";
import { useAppState } from "../../../contexts/AppContext";
import Button from 'react-bootstrap/Button';
import {controlFollowFunction, add_deleteFollowHandle, followedUserStories} from "../../../helpers/apiRequests"


const UserProfile = ( {editOrFollowButton, authorInfo, updateDetails }) => {

  const [followOrFollowing, setfollowOrFollowing] = useState(false)
  const [companentInfoData, setcompanentInfoData] = useState({
    name:"",
    img : "",
  })
  const { setFollowingStories } = useAppState()



  useEffect(() => {
    sideBarInfoGet()
    if (authorInfo) {
      let userId = authorInfo.userProfilId
      let tokenKey = get_token()
      controlFollowFunction(setfollowOrFollowing, userId, tokenKey)
    }
  }, [authorInfo])

  const get_token = () => {
    const get_session_user_info = JSON.parse(sessionStorage.getItem("user_info"))
    let tokenKey = get_session_user_info.key
    return tokenKey
  }

  const addFollowHandle = () => {
    const  tokenKey = get_token()
    let userId = authorInfo.userProfilId

    if (followOrFollowing) {
      add_deleteFollowHandle(followOrFollowing, tokenKey, userId)
      setfollowOrFollowing(false)
      updateDetails()
      followedUserStories(setFollowingStories, tokenKey )
    }else{
      add_deleteFollowHandle(followOrFollowing, tokenKey, userId)
      setfollowOrFollowing(true)
      updateDetails()
      followedUserStories(setFollowingStories, tokenKey )
    }
  }

  const get_user_info = () => {
    const user_info = JSON.parse(sessionStorage.getItem("user_info"));
    return user_info;
  }

  const sideBarInfoGet = () => {
    if (editOrFollowButton) {
      let userInfo = get_user_info()
      console.log(userInfo)
      setcompanentInfoData({
        name: userInfo.userInfo.first_name + " " + userInfo.userInfo.last_name,
        img: userInfo.userInfo.image
      })
    }else{
      setcompanentInfoData({
        name: authorInfo.first_name + " " + authorInfo.last_name,
        img: authorInfo.user_img,
        bio: authorInfo.short_bio,
        followedCount : authorInfo.followedCount,
      })
    }
  }



  return (
    <Container>
      <div>
        <img src={companentInfoData.img ? companentInfoData.img : "" } alt="user-photo" />
        <div className="username"> {companentInfoData ? companentInfoData.name : ""} </div>
        {editOrFollowButton ?
          ""
        :
          <div className="my-3" >  
            <small className="text-muted"> {companentInfoData ? companentInfoData.followedCount : ""} Follower</small> 
            <div> <small className="text-muted"> { companentInfoData ? companentInfoData.bio : ""} </small>  </div>
          </div> 
        }

      {editOrFollowButton ?
        <Link className="edit-profile" to="/home/profile">
          Edit profile
        </Link>
        :
        <Button variant="success" onClick={addFollowHandle} >{followOrFollowing ? "Following"  : "Follow" }</Button>  
      }
             
      </div>
    </Container>
  );
};

export default UserProfile;
