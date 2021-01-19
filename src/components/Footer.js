import "./Footer.css";
import React from "react";
import img1 from "../assets/GBatch.png";
import img2 from "../assets/ABatch.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="fooleft">
        <ul className="list-1">
          <li>
            <a href="#/">Download Now</a>
          </li>
          <li>
            <a href="#/">License</a>
          </li>
        </ul>
        <ul className="list-2">
          <li>
            <a href="#/">About</a>
          </li>
          <li>
            <a href="#/">Features</a>
          </li>
          <li>
            <a href="#/">Pricing</a>
          </li>
          <li>
            <a href="#/">Careers</a>
          </li>
          <li>
            <a href="#/">Help</a>
          </li>
          <li>
            <a href="#/">Privacy Policy</a>
          </li>
        </ul>
        <p>© 2020 Landify UI Kit. All rights reserved</p>
      </div>

      <div className="fooright">
        <img src={img1} alt="img1" />
        <img src={img2} alt="img2" />
      </div>
    </div>
  );
};

export default Footer;
