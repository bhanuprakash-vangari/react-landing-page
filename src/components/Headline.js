import PM2 from "../assets/PM2.png";
import "./Headline.css";
import React from "react";

const Headline = () => {
  return (
    <div className="headline">
      <div className="left">
        <img src={PM2} alt="PM2" />
      </div>
      <div className="right">
        <h1>Headline</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing <br />
          elit. Condimentum diam orci pretium a pharetra,
          <br /> feugiat cursus. Dictumst risus, sem egestas odio cras
          <br />
          adipiscing vulputate. Nisi, risus in suscipit non. Non
          <br /> commodo volutpat, pharetra, vel.
        </p>
        <a href="/#">
          <h5>Get Started -></h5>
        </a>
      </div>
    </div>
  );
};

export default Headline;
