import React from "react";
import MockUp from "../assets/PM.png";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="Hero">
      <div className="mainText">
        <h1>
          Organise projects.
          <br />Get more done.
        </h1>
        <button>Get Started</button>
      </div>

      <div className="img">
        <img alt="mockup" src={MockUp}></img>
      </div>
    </div>
  );
};

export default Hero;
