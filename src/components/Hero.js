import React from "react";

function Hero() {
  return (
    <div className="hero">
      <img
        src={process.env.PUBLIC_URL + "images/photo-grid.png"}
        alt="photoGrid"
      />
      <div className="text">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}

export default Hero;
