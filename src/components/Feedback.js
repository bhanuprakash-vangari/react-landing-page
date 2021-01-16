import React from "react";
import "./Feedback.css";
import HS from "../assets/hs.png";
import ABnB from "../assets/Abnb.png";
import BMS from "../assets/bms.png";
const Feedback = () => {
  return (
    <div className="feedback">
      <div className="left">
        <h2>
          Real Stories from
          <br />
          Real Customers
        </h2>
        <p>Get inspired by these stories.</p>
        <div className="left-card">
          <img alt="hs" src={HS}></img>
          <p>
            To quickly start my startup landing page design, I was looking for a
            landing page UI Kit. Landify is one of the best landing page UI kit
            I have come across. It’s so flexible, well organised and easily
            editable.
          </p>
          <h6>Floyd Miles</h6>
          <p id="designation">Vice President, GoPro</p>
        </div>
      </div>
      <div className="right">
        <div className="right-card-1">
          <img alt="logo" src={ABnB}></img>
          <p>
            I used landify and created a landing page for my startup within a
            week. The Landify UI Kit is simple and highly intuitive, so anyone
            can use it.
          </p>
          <h6>Jane Cooper</h6>
          <p id="designation">CEO, Airbnb</p>
        </div>
        <div className="right-card-2">
          <img alt="logo" src={BMS}></img>
          <p>Landify saved our time in designing my company page.</p>
          <h6>Kristin Watson</h6>
          <p id="designation">Co-Founder, BookMyShow</p>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
