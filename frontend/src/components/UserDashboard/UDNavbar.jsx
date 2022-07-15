import React from "react";
import {
  IconsStyle,
  IconStyle,
  LeftSideBar,
  LogoStyle,
  UserAccountStyle,
} from "./styles/UDNavbar.styles";

import Tooltip from "@mui/material/Tooltip";

import Images from "../../assets/Images";
import AccountMenu from "./NavbarUserMenu";

const UDNavbar = () => {
  return (
    <LeftSideBar>
      <LogoStyle href="/">
        <img src={Images.medium} alt="logo" />
      </LogoStyle>

      <IconsStyle>
        <Tooltip title="Home" arrow placement="right">
          <a href="/">
            <IconStyle
              src={Images.home}
              alt="home"
              style={{ filter: "sepia(13%)" }}
            />
          </a>
        </Tooltip>
        <Tooltip title="Notifications" arrow placement="right">
          <a href="/">
            <IconStyle src={Images.alarm} alt="logo" />
          </a>
        </Tooltip>

        <Tooltip title="Lists" arrow placement="right">
          <a href="/">
            <IconStyle src={Images.bookmark} alt="Lists Icon" />
          </a>
        </Tooltip>
        <Tooltip title="Stories" arrow placement="right">
          <a
            href=""
            style={{ borderBottom: "1px solid grey", paddingBottom: "2rem" }}
          >
            <IconStyle src={Images.script} alt="Stories Icon" />
          </a>
        </Tooltip>

        <Tooltip title="Edit" arrow placement="right">
          <a href="/">
            <IconStyle src={Images.edit} alt="edit icon" />
          </a>
        </Tooltip>
        <hr />
      </IconsStyle>

      <UserAccountStyle>
        <AccountMenu />
      </UserAccountStyle>
    </LeftSideBar>
  );
};

export default UDNavbar;
