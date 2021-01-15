import React from "react";
import "../components/NavBar.css";
import Logo from "../assets/logo.png";
import GBatch from "../assets/GBatch.png";
import ABatch from "../assets/ABatch.png";
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className="nav">
        <nav>
          <ul className="nav_links">
            <li>
              <a href="/#">About</a>
            </li>
            <li>
              <a href="/#">Products</a>
            </li>
            <li>
              <a href="/#">Pricing</a>
            </li>
            <li>
              <a href="/#">Blog</a>
            </li>
            <li>
              <a href="/#">Jobs</a>
            </li>
            <li>
              <a href="/#">More</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="cta">
        <a className="cta1" href="/#">
          <img src={GBatch} alt="/#"></img>
        </a>
        <a className="cta2" href="/#">
          <img src={ABatch} alt="/#"></img>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
