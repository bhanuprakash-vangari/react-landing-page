import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import "./App.css";
import Achievements from "./components/Achievements";
import AdvtFooter from "./components/AdvtFooter";
import Footer from "./components/Footer";
import Headline from "./components/Headline";
import Features from "./components/Features";
import Trends from "./components/Trends";
import Feedback from "./components/Feedback";
import Banner from "./components/Banner";
const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Banner />
      <Features />
      <Feedback />
      <Achievements />
      <Headline />
      <Trends />
      <AdvtFooter />
      <Footer />
    </div>
  );
};

export default App;
