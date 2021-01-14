import React from "react";
import NavBar from "./components/NavBar";
import BG from "./assets/bg.png";
import Hero from "./components/Hero";
import Features from "./components/Features";

const App = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BG})`,
        height: `100vh`,
        width: `100vw`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `100vw 100vh`,
      }}
    >
      <NavBar />
      <Hero />
      <Features />
    </div>
  );
};

export default App;
