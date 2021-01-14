import React from 'react'
import './Hero.css'
import LGC from "../assets/LC.png";
import MockUp from "../assets/PM.png";
const Hero = () => {
    return (
      <div className="Hero">
        <div className="HeroImg">
          <img src={MockUp} alt="mockup"></img>
        </div>
        <h1>
          Organise projects.
          <br />
          Get more done.
        </h1>
        <button>Get Started</button>
        <img className="LogoClub" src={LGC} alt=""></img>
      </div>
    );
}

export default Hero
