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
import { Link, useNavigate } from "react-router-dom";

const UDNavbar = () => {
  const navigate = useNavigate();
  return (
    <LeftSideBar>
      <LogoStyle onClick={() => navigate("/")}>
        <img src={Images.medium} alt="logo" />
      </LogoStyle>

      <IconsStyle>
        <Tooltip title="Home" arrow placement="right">
          <Link to="/home">
            <IconStyle
              src={Images.home}
              alt="home"
              style={{ filter: "sepia(13%)" }}
            />
          </Link>
        </Tooltip>
        <Tooltip title="Notifications" arrow placement="right">
          <Link to="/home">
            <IconStyle src={Images.alarm} alt="logo" />
          </Link>
        </Tooltip>

        <Tooltip title="Lists" arrow placement="right">
          <Link to="/me/lists">
            <IconStyle src={Images.bookmark} alt="Lists Icon" />
          </Link>
        </Tooltip>
        <Tooltip title="Stories" arrow placement="right">
          <Link
            to="/me/stories"
            style={{ borderBottom: "1px solid grey", paddingBottom: "2rem" }}
          >
            <IconStyle src={Images.script} alt="Stories Icon" />
          </Link>
        </Tooltip>

        <Tooltip title="Edit" arrow placement="right">
          <Link to="/write">
            <IconStyle src={Images.edit} alt="edit icon" />
          </Link>
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
