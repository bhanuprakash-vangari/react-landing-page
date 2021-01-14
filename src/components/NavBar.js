import React from "react";
import "../components/NavBar.css";
import Logo from "../assets/logo.png";
import GBatch from "../assets/GBatch.png";
import ABatch from "../assets/ABatch.png";
const NavBar = () => {
  return (
    <header>
      <img className="logo" src={Logo} alt="logo" />
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
      <a className="cta" href="/#">
        <img src={GBatch} alt="/#"></img>
      </a>
      <a className="cta" href="/#">
        <img src={ABatch} alt="/#"></img>
      </a>
    </header>
  );
};

export default NavBar;
