import React from "react";
import "./Features.css";
import img1 from "../assets/Feature/Multiple/Feature Icons/01.png";
import img2 from "../assets/Feature/Multiple/Feature Icons/02.png";
import img3 from "../assets/Feature/Multiple/Feature Icons/03.png";
import img4 from "../assets/Feature/Multiple/Feature Icons/04.png";
import img5 from "../assets/Feature/Multiple/Feature Icons/05.png";
import img6 from "../assets/Feature/Multiple/Feature Icons/06.png";
const Features = () => {
  return (
    <div className="container">
      <h1>Tailor-made features</h1>
      <p>
        Lorem ipsum is common placeholder text used to demonstrate
        <br />
        the graphic elements of a document or visual presentation.
      </p>
      <div className="cards">
        <div className="card1">
          <img src={img1} alt="img1"></img>
          <h5>Robust workflow</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit. Sed erat nibh tristique ipsum.
          </p>
        </div>
        <div className="card2">
          <img src={img2} alt="img2"></img>
          <h5>Flexibility</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit. Sed erat nibh tristique ipsum.
          </p>
        </div>
        <div className="card3">
          <img src={img3} alt="img3"></img>
          <h5>User friendly</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit. Sed erat nibh tristique ipsum.
          </p>
        </div>
        <div className="card4">
          <img src={img4} alt="img4"></img>
          <h5>Multiple layouts</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit. Sed erat nibh tristique ipsum.
          </p>
        </div>
        <div className="card5">
          <img src={img5} alt="img5"></img>
          <h5>Better components</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit. Sed erat nibh tristique ipsum.
          </p>
        </div>
        <div className="card6">
          <img src={img6} alt="img6"></img>
          <h5>Well organised</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit. Sed erat nibh tristique ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
