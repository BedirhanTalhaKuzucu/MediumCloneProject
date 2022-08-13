import React from "react";
import { useEffect, useState } from "react";
import { TooltipContainer } from "./styles/MainFollowingTooptip.styles";
import { userDetails } from "../../helpers/apiRequests";


const MainFollowingTooltip = ({creatorInfo, userId}) => {
  useEffect(() => {
    userDetails(userId);
  }, []);
  return (
    <TooltipContainer>
      <div>
        <div className="div1">
          <img 
          src={creatorInfo ? creatorInfo.user_img :  "https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"} alt="" />
          <h5> {creatorInfo ? creatorInfo.first_name + " " + creatorInfo.last_name :  "İrem Kömürcü"}  </h5>
        </div>
        <div className="div2">
          <p>
            {/* {creatorInfo.short_bio} | {creatorInfo.email} */}
          </p>
        </div>
        <hr />
        <div className="div3">
          {/* <p>{creatorInfo.followedCount} Followers</p> */}
          <button>Following</button>
        </div>
      </div>
    </TooltipContainer>
  );
};

export default MainFollowingTooltip;
