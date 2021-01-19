import CVR from '../assets/cover.png'
import './Trends.css'
import React from 'react'

const Trends = () => {
    return (
      <div className="trends">
        <div className="top-left">
          <h1>Enter the world of all fashion trends</h1>
        </div>
        <div className="top-right">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis
            scelerisque at quam congue posuere libero in sit quam. Consequat,
            scelerisque non tincidunt sit lectus senectus.
          </p>
        </div>
        <div className="bottom">
            <img src={CVR} alt="cover" />
        </div>
      </div>
    );
}

export default Trends
