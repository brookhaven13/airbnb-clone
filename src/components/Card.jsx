/* eslint-disable react/prop-types */
import React from "react";

function Card(props) {
  console.log(props);
  return (
    <div className="card-wrapper">
      <img
        className="card--image"
        src={"card-items/" + props.coverImg + ".svg"}
      ></img>
      <div className="card--content">
        <div className="text">
          <span>⭐ {props.rating}</span>
          <span className="text--sub">
            ({props.reviewCount})<span className="dot"></span>
            {props.location}
          </span>
        </div>
        <div className="text">Life lessons with Katie Zaferes</div>
        <div className="text">
          <b>From $136</b>
          <span>/ person</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
