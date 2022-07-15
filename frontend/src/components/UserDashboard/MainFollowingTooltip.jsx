import React from "react";
import { TooltipContainer } from "./styles/MainFollowingTooptip.styles";

const MainFollowingTooltip = () => {
  return (
    <TooltipContainer>
      <div>
        <div className="div1">
          <img src="" alt="" />
          <p>user name</p>
        </div>
        <div className="div2">
          <p>following user explain</p>
        </div>
        <hr />
        <div className="div3">
          <p>followers account</p>
          <button>following button</button>
        </div>
      </div>
    </TooltipContainer>
  );
};

export default MainFollowingTooltip;
