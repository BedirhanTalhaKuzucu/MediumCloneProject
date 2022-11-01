import React from "react";
import { useEffect, useState } from "react";
import { TooltipContainer } from "./styles/MainFollowingTooptip.styles";

const MainFollowingTooltip = ({ followedInfo, creatorInfo }) => {
  const [userInfo, setuserInfo] = useState();

  useEffect(() => {
    if (followedInfo) {
      setuserInfo({
        image: followedInfo.followedDetails.image,
        name: followedInfo.followedDetails.name,
        bio: followedInfo.followedDetails.bio,
        email: followedInfo.followedDetails.email,
        followedCount: followedInfo.followedDetails.followedCount,
      });
    } else {
      setuserInfo({
        image: creatorInfo?.user_img,
        name: creatorInfo?.first_name + " " + creatorInfo?.last_name,
        bio: creatorInfo?.short_bio,
        email: creatorInfo?.email,
        followedCount: creatorInfo?.followedCount,
      });
    }
  }, []);

  return (
    <TooltipContainer>
      <div>
        <div className="div1">
          <img
            src={
              userInfo
                ? userInfo.image
                : "https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"
            }
            alt=""
          />
          <h5> {userInfo ? userInfo.name : ""} </h5>
        </div>
        <div className="div2">
          <p>
            {userInfo ? userInfo.bio : ""} | {userInfo ? userInfo.email : ""}
          </p>
        </div>
        <hr />
        <div className="div3">
          <p>{userInfo ? userInfo.followedCount : ""} Followers</p>
          <button>Following</button>
        </div>
      </div>
    </TooltipContainer>
  );
};

export default MainFollowingTooltip;
