import React from "react";
import { TooltipContainer } from "./styles/MainFollowingTooptip.styles";

const MainFollowingTooltip = () => {
  return (
    <TooltipContainer>
      <div>
        <div className="div1">
          <img src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png" alt="" />
          <h5>İrem Kömürcü</h5>
        </div>
        <div className="div2">
          <p>
            Google Developer Expert on Machine Learning | Data Scientist
            @Deloitte | iremkomurcu.com
          </p>
        </div>
        <hr />
        <div className="div3">
          <p>1.6K Followers</p>
          <button>Following</button>
        </div>
      </div>
    </TooltipContainer>
  );
};

export default MainFollowingTooltip;
