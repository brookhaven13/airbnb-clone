import React from "react";
import logo from "./../assets/img/airbnb-logo.png";

function Navbar() {
  return (
    <div className="nav-wrapper">
      <img className="nav-logo" src={logo} />
    </div>
  );
}

export default Navbar;
