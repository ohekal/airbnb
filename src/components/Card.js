import React from "react";

function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="badge">{badgeText}</div>}
      <img
        src={process.env.PUBLIC_URL + `images/${props.img}`}
        alt="CardImage"
      />
      <div>
        <img src={process.env.PUBLIC_URL + `images/Star.png`} alt="starImage" />
        <span>{props.rating}</span>
        <span>
          ({props.review}) • {props.country}
        </span>
      </div>
      <p>{props.title}</p>
      <p>
        <span>From ${props.price}</span> / person
      </p>
    </div>
  );
}

export default Card;
