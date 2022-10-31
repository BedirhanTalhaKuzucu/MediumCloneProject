import React, { useRef } from "react";
import { TopButtonStyles } from "./ScrollToTop.styles";

const ScrollToTop = () => {
  return (
    <TopButtonStyles>
      <a href="#pageTop" class="arrowbtn arrowbtn-up"></a>
    </TopButtonStyles>
  );
};
export default ScrollToTop;
