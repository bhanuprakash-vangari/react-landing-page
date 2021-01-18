import "./Achievements.css";
import React from "react";
import a1 from "../assets/Feature/Multiple/Feature Icons/01.png";
import a2 from "../assets/Feature/Multiple/Feature Icons/02.png";
import a3 from "../assets/Feature/Multiple/Feature Icons/03.png";
import a4 from "../assets/Feature/Multiple/Feature Icons/04.png";

const Achievements = () => {
  return (
    <div className="achievements">
      <div className="a-left">
        <h1>
          Our 18 years of
          <br />
          achievements
        </h1>
        <p>With our super powers we have reached this</p>
      </div>
      <div className="a-right">
        <div className="a1">
          <h2>10,000+</h2>
          <img src={a1} alt="/#" />
          <p>Downloads per day</p>
        </div>
        <div className="a2">
          <img src={a2} alt="/#" />
          <h2>2 Million</h2>
          <p>Users</p>
        </div>

        <div className="a3">
          <img src={a3} alt="/#" />
          <h2>500+</h2>
          <p>Clients</p>
        </div>

        <div className="a4">
          <img src={a4} alt="/#" />
          <h2>140</h2>
          <p>Countries</p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
