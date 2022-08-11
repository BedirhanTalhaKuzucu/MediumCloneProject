import { Link } from "react-router-dom";
import Images from "../../../assets/Images";
import { Container } from "./styles/UserProfile.styles";
import { useState, useEffect } from "react";
import { useAppState } from "../../../contexts/AppContext";
import Button from 'react-bootstrap/Button';


const UserProfile = ( {editOrFollowButton, creatorInfo}) => {

  const [companentInfoData, setcompanentInfoData] = useState({
    name:"",
    img : "",
  })
  console.log(editOrFollowButton)


  useEffect(() => {
    sideBarInfoGet()
  }, [])

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
        name: creatorInfo.first_name + " " + creatorInfo.last_name,
        img: creatorInfo.user_img,
        bio: creatorInfo.short_bio,
        followedCount : creatorInfo.followedCount,
      })
    }
  }

  return (
    <Container>
      <div>
        <img src={companentInfoData.img && companentInfoData.img } alt="user-photo" />
        <div className="username"> {companentInfoData.name && companentInfoData.name } </div>
        {editOrFollowButton ?
          ""
        :
          <div className="my-3" >  
            <small className="text-muted"> {companentInfoData.followedCount} Follower</small> 
            <div> <small className="text-muted"> {companentInfoData.bio} </small>  </div>
          </div> 
        }

      {editOrFollowButton ?
        <Link className="edit-profile" to="/home/profile">
          Edit profile
        </Link>
        :
        <Button variant="success">Follow</Button>  
      }
             
      </div>
    </Container>
  );
};

export default UserProfile;
