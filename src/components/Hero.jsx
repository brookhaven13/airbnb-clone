import React from "react";
import image from "./../assets/img/hero.svg";

function Hero() {
  return (
    <div className="hero--wrapper">
      <img className="image" src={image} />
      <div className="desc">
        <span className="title">Online Experiences</span>
        <span className="text">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </span>
      </div>
    </div>
  );
}

export default Hero;
