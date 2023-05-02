// import React from "react";
import logo from "./../assets/img/airbnb-logo.png";
import "./../App.scss";

export default function Navbar() {
  return (
    <div className="nav--wrapper">
      <img className="logo" src={logo} />
    </div>
  );
}
