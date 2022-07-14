import React from "react";
import home from "../../assets/home.png";
import alarm from "../../assets/alarm.png";
import script from "../../assets/script.png";

const UDNavbar = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0  fixed-left border p-2 vh-100"
      style={{ width: "5rem" }}
    >
      <a href="/" className="p-2 mt-3 mx-1">
        <img
          src="https://cdn-icons-png.flaticon.com/512/5968/5968885.png"
          alt="logo"
          className="w-100 h-100"
        />
      </a>
      <nav className="d-flex flex-column flex-shrink-0 align-items-center justify-content-evenly mt-4 h-75 p-1 m-">
        <a href="/" className="">
          <img
            src={home}
            alt="home"
            className="w-75 h-75"
          />
        </a>
        <a href="/" className="">
          <img
            src={alarm}
            alt="logo"
            className="w-75 h-75"
          />
        </a>

        <a href="/">
          <img
            src="https://cdn-icons.flaticon.com/png/512/5772/premium/5772191.png?token=exp=1657199274~hmac=ee90f4c5837d42cd4d3ed9798b714f6a"
            alt=""
            className="w-75 h-75"
          />
        </a>
        <a href="">
          <img
            className="w-75 h-75"
            src={script}
            alt=""
          />
        </a>

        <a href="/">
          <img
            className="w-75 h-75"
            src="https://cdn-icons-png.flaticon.com/512/1159/1159633.png"
            alt=""
          />
        </a>
        <hr />
      </nav>

      <nav>
        <img src="" alt="kullanıcı profili" />
      </nav>
    </div>
  );
};

export default UDNavbar;
