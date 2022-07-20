import React from "react";
import { NavBar } from "../styles/profile/ProfileNavbar.styles";
import Images from "../../../assets/Images";
import AccountMenu from "../NavbarUserMenu";
import { Link } from "react-router-dom";

const ProfileNavbar = () => {
  return <NavBar>
    <Link to='/home' className="mediumIcon">
    <img src={Images.largeicon} alt="" />        
    </Link>

    <section className="icons">
    <img src={Images.search} alt="" />
    <img src={Images.bookmark} alt="" />
    <img src={Images.alarm} alt="" />
    <AccountMenu/>
    </section>
  </NavBar>;
};

export default ProfileNavbar;
