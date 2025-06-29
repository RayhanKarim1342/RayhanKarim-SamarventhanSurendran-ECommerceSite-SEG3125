import React from "react";
import Navbar from "../components/Navbar";
import ContentCarousel from "../components/ContentCarousel";

const Home = () => {
  return (
    <div className="home-background">
      <Navbar />
      <ContentCarousel />
    </div>
  );
};

export default Home;
